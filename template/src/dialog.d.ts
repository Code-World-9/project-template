import type { MessageApiInjection, DialogApi } from "naive-ui"

declare global {
    interface Window {
        $message: MessageApiInjection
        $dialog: DialogApi
    }
}