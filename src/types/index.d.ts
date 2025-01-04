export interface EncryptFunction {
  (data: string): string
}

export type DecryptFunction = EncryptFunction // Alias for the interface

export interface ClipboardItem {
  id: number
  text: string
}

export interface Message {
  action: string
}
