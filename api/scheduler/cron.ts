// Vercel Cron Function for WhatsApp Scheduler
// POST /api/scheduler/cron - Check and process scheduled tasks
// GET /api/scheduler/cron - Status check

import type { VercelRequest, VercelResponse } from '@vercel/node';
import { tasks } from './index';

function maskPhone(phone: string): string {
  const cleaned = phone.replace(/\D/g, '');
  if (cleaned.length <= 4) return cleaned;
  return cleaned.slice(0, 3) + '***' + cleaned.slice(-2);
}

function generateWALink(phone: string, message: string): string {
  const cleaned = phone.replace(/\D/g, '');
  let url = `https://wa.me/${cleaned}`;
  if (message) url += `?text=${encodeURIComponent(message)}`;
  return url;
}

export default async function handler(req: VercelRequest, res: VercelResponse) {
  try {
    const startTime = Date.now();
    let processedCount = 0;
    let readyTasks: Array<{ id: string; phone: string; waLink: string }> = [];
    
    const now = new Date();
    
    // Process tasks
    for (const [id, task] of tasks.entries()) {
      if (task.status === 'pending') {
        const scheduledTime = new Date(task.scheduledFor);
        
        if (scheduledTime <= now) {
          task.status = 'ready';
          tasks.set(id, task);
          
          const waLink = generateWALink(task.phone, task.message);
          
          readyTasks.push({
            id,
            phone: maskPhone(task.phone),
            waLink
          });
          
          processedCount++;
          console.log(`[Scheduler Cron] Task ${id} is now ready for ${maskPhone(task.phone)}`);
        }
      }
    }

    // Expire old ready tasks (older than 24 hours)
    const expiryThreshold = new Date(now.getTime() - 24 * 60 * 60 * 1000);
    let expiredCount = 0;
    
    for (const [id, task] of tasks.entries()) {
      if (task.status === 'ready') {
        const scheduledTime = new Date(task.scheduledFor);
        if (scheduledTime < expiryThreshold) {
          task.status = 'expired';
          tasks.set(id, task);
          expiredCount++;
          console.log(`[Scheduler Cron] Task ${id} expired (older than 24h)`);
        }
      }
    }
    
    const executionTime = Date.now() - startTime;

    if (req.method === 'POST') {
      return res.status(200).json({
        success: true,
        timestamp: now.toISOString(),
        executionTimeMs: executionTime,
        summary: {
          totalTasks: tasks.size,
          processed: processedCount,
          ready: readyTasks.length,
          expired: expiredCount
        },
        readyTasks: readyTasks.slice(0, 10),
        message: `Processed ${processedCount} tasks in ${executionTime}ms`
      });
    }

    if (req.method === 'GET') {
      let pendingCount = 0;
      let readyCount = 0;
      let expiredCount = 0;
      
      for (const task of tasks.values()) {
        if (task.status === 'pending' && new Date(task.scheduledFor) <= now) {
          readyCount++;
        } else if (task.status === 'ready') {
          readyCount++;
        } else if (task.status === 'expired') {
          expiredCount++;
        } else {
          pendingCount++;
        }
      }

      return res.status(200).json({
        success: true,
        status: 'healthy',
        timestamp: now.toISOString(),
        stats: {
          totalTasks: tasks.size,
          pending: pendingCount,
          ready: readyCount,
          expired: expiredCount
        },
        nextCheck: '5 minutes'
      });
    }

    return res.status(405).json({ success: false, error: 'Method not allowed' });
  } catch (error) {
    console.error('[Scheduler Cron] Error:', error);
    return res.status(500).json({
      success: false,
      error: 'Cron execution failed',
      timestamp: new Date().toISOString()
    });
  }
}
