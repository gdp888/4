// Vercel Serverless Function for WhatsApp Scheduler
// POST /api/scheduler - Create a new scheduled task
// GET /api/scheduler - List all tasks

import type { VercelRequest, VercelResponse } from '@vercel/node';

// In-memory storage (for demo - in production use Vercel KV or external DB)
const tasks = new Map<string, ScheduledTask>();

export interface ScheduledTask {
  id: string;
  phone: string;
  message: string;
  scheduledFor: string;
  timezone: string;
  lang: string;
  createdAt: string;
  status: 'pending' | 'ready' | 'expired';
}

function generateId(): string {
  return 'task_' + Date.now() + '_' + Math.random().toString(36).substring(2, 9);
}

function validatePhone(phone: string): { valid: boolean; error?: string } {
  const cleaned = phone.replace(/\D/g, '');
  if (cleaned.length < 8) return { valid: false, error: 'Phone number too short' };
  if (cleaned.length > 15) return { valid: false, error: 'Phone number too long' };
  if (!/^\d+$/.test(cleaned)) return { valid: false, error: 'Invalid characters in phone number' };
  return { valid: true };
}

function validateScheduledTime(scheduledFor: string): { valid: boolean; error?: string } {
  const scheduledDate = new Date(scheduledFor);
  const now = new Date();
  if (isNaN(scheduledDate.getTime())) return { valid: false, error: 'Invalid date format' };
  const maxFuture = new Date();
  maxFuture.setFullYear(maxFuture.getFullYear() + 1);
  if (scheduledDate > maxFuture) return { valid: false, error: 'Cannot schedule more than 1 year in advance' };
  if (scheduledDate <= now) return { valid: false, error: 'Scheduled time must be in the future' };
  return { valid: true };
}

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
  // CORS headers
  res.setHeader('Access-Control-Allow-Origin', '*');
  res.setHeader('Access-Control-Allow-Methods', 'GET, POST, OPTIONS');
  res.setHeader('Access-Control-Allow-Headers', 'Content-Type');

  if (req.method === 'OPTIONS') {
    return res.status(204).end();
  }

  try {
    if (req.method === 'GET') {
      const url = new URL(req.url || '', `http://${req.headers.host}`);
      const status = url.searchParams.get('status');
      
      let allTasks = Array.from(tasks.values());
      const now = new Date();
      
      // Update statuses
      allTasks = allTasks.map(task => {
        if (task.status === 'pending' && new Date(task.scheduledFor) <= now) {
          return { ...task, status: 'ready' as const };
        }
        return task;
      });
      
      if (status && ['pending', 'ready', 'expired'].includes(status)) {
        allTasks = allTasks.filter(task => task.status === status);
      }
      
      allTasks.sort((a, b) => new Date(a.scheduledFor).getTime() - new Date(b.scheduledFor).getTime());
      
      return res.status(200).json({
        success: true,
        count: allTasks.length,
        tasks: allTasks.map(task => ({ ...task, phone: maskPhone(task.phone) }))
      });
    }

    if (req.method === 'POST') {
      const body = req.body;
      const { phone, message, scheduledFor, timezone, lang } = body as any;

      if (!phone || !scheduledFor) {
        return res.status(400).json({ success: false, error: 'Missing required fields: phone, scheduledFor' });
      }

      const phoneValidation = validatePhone(phone);
      if (!phoneValidation.valid) {
        return res.status(400).json({ success: false, error: phoneValidation.error });
      }

      const timeValidation = validateScheduledTime(scheduledFor);
      if (!timeValidation.valid) {
        return res.status(400).json({ success: false, error: timeValidation.error });
      }

      const task: ScheduledTask = {
        id: generateId(),
        phone: phone.replace(/\D/g, ''),
        message: message || '',
        scheduledFor: new Date(scheduledFor).toISOString(),
        timezone: timezone || 'UTC',
        lang: lang || 'en',
        createdAt: new Date().toISOString(),
        status: 'pending'
      };

      tasks.set(task.id, task);

      console.log(`[Scheduler] Task created: ${task.id} for ${maskPhone(task.phone)} at ${task.scheduledFor}`);

      return res.status(201).json({
        success: true,
        task: {
          id: task.id,
          phone: maskPhone(task.phone),
          message: task.message,
          scheduledFor: task.scheduledFor,
          timezone: task.timezone,
          status: task.status,
          createdAt: task.createdAt
        },
        waLink: generateWALink(task.phone, task.message)
      });
    }

    return res.status(405).json({ success: false, error: 'Method not allowed' });
  } catch (error) {
    console.error('[Scheduler] Error:', error);
    return res.status(500).json({ success: false, error: 'Internal server error' });
  }
}
