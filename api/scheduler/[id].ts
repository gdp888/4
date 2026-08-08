// Vercel Serverless Function for single task operations
// GET /api/scheduler/[id] - Get specific task
// DELETE /api/scheduler/[id] - Delete a task

import type { VercelRequest, VercelResponse } from '@vercel/node';
import { tasks, type ScheduledTask } from './index';

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
  res.setHeader('Access-Control-Allow-Methods', 'GET, DELETE, OPTIONS');
  res.setHeader('Access-Control-Allow-Headers', 'Content-Type');

  if (req.method === 'OPTIONS') {
    return res.status(204).end();
  }

  try {
    const { id } = req.query as any;

    if (!id) {
      return res.status(400).json({ success: false, error: 'Task ID is required' });
    }

    const task = tasks.get(id);

    if (!task) {
      return res.status(404).json({ success: false, error: 'Task not found' });
    }

    if (req.method === 'GET') {
      const now = new Date();
      let status = task.status;
      if (status === 'pending' && new Date(task.scheduledFor) <= now) {
        status = 'ready';
      }

      let waLink = null;
      if (status === 'ready') {
        waLink = generateWALink(task.phone, task.message);
      }

      return res.status(200).json({
        success: true,
        task: {
          id: task.id,
          phone: maskPhone(task.phone),
          message: task.message,
          scheduledFor: task.scheduledFor,
          timezone: task.timezone,
          lang: task.lang,
          createdAt: task.createdAt,
          status,
          waLink
        }
      });
    }

    if (req.method === 'DELETE') {
      tasks.delete(id);
      console.log(`[Scheduler] Task deleted: ${id}`);
      return res.status(200).json({ success: true, message: 'Task deleted successfully' });
    }

    return res.status(405).json({ success: false, error: 'Method not allowed' });
  } catch (error) {
    console.error('[Scheduler Task] Error:', error);
    return res.status(500).json({ success: false, error: 'Internal server error' });
  }
}
