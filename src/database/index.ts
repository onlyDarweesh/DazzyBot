import sqlite3 from 'sqlite3';
import { open, Database } from 'sqlite';
import { readFileSync } from 'fs';
import { join } from 'path';
import { logger } from '@config/logger';

let db: Database;

export async function initDatabase() {
  try {
    db = await open({
      filename: './database.sqlite',
      driver: sqlite3.Database,
    });

    logger.info('Database connection established');

    // Initialize schema
    await initSchema();

    return db;
  } catch (error) {
    logger.error('Failed to initialize database:', error);
    throw error;
  }
}

async function initSchema() {
  try {
    const schemaPath = join(__dirname, 'schema.sql');
    const schema = readFileSync(schemaPath, 'utf-8');
    const statements = schema.split(/;/)
      .map(sql => sql.trim())
      .filter(sql => sql.length > 0);

    for (const statement of statements) {
      await db.exec(statement);
    }

    logger.info('Database schema initialized');
  } catch (error) {
    logger.error('Failed to initialize database schema:', error);
    throw error;
  }
}

export async function query(sql: string, params: any[] = []) {
  try {
    const result = await db.all(sql, params);
    return result;
  } catch (error) {
    logger.error('Database query failed:', error);
    throw error;
  }
}

export async function exec(sql: string, params: any[] = []) {
  try {
    const result = await db.run(sql, params);
    return result;
  } catch (error) {
    logger.error('Database exec failed:', error);
    throw error;
  }
}

export async function getRow(sql: string, params: any[] = []) {
  try {
    const result = await db.get(sql, params);
    return result;
  } catch (error) {
    logger.error('Database getRow failed:', error);
    throw error;
  }
}

export async function closeDatabase() {
  try {
    await db.close();
    logger.info('Database connection closed');
  } catch (error) {
    logger.error('Failed to close database:', error);
  }
}

export { db };