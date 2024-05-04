import { logEvent } from "firebase/analytics"
import { analytics } from "./getFirebase"

export const getAnalytics =()=>{
    logEvent(analytics,'notification_recieved')
}