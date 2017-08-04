/**
 * Add custom fields to existing definitions in this file
 */

declare namespace Express {
  export interface Response {
    sendError(err: string, statusCode: number): void
  }
}
