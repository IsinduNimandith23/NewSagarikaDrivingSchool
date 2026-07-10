/**
 * Payment gateway foundation.
 *
 * No gateway is integrated yet — this module defines the shapes the rest of
 * the app can build against so a provider can be dropped in later without
 * touching the UI.
 *
 * Intended PayHere (https://www.payhere.lk) flow:
 *   1. A booking form POSTs to an API route (e.g. /api/checkout) which builds
 *      a PayHere checkout payload signed with an md5sig of
 *      merchant_id + order_id + amount + currency + hashed merchant_secret,
 *      then redirects the student to PayHere.
 *   2. PayHere calls our `notify_url` webhook (e.g. /api/payments/notify)
 *      server-to-server. The handler must verify the md5sig on the
 *      notification before marking the booking paid.
 *   3. The student returns via return_url/cancel_url pages.
 *
 * Stripe alternative: implement PaymentProvider with Checkout Sessions
 * (createCheckout -> session.url) and verify webhook signatures with
 * STRIPE_WEBHOOK_SECRET in verifyNotification.
 *
 * Env vars are declared in .env.example (PAYHERE_MERCHANT_ID,
 * PAYHERE_MERCHANT_SECRET, PAYHERE_MODE).
 */

export type CourseId =
  | 'full-time'
  | 'refresher'
  | 'vip'
  | 'off-peak'
  | 'customized'
  | 'special'

export interface Booking {
  /** Unique order reference, e.g. a cuid/uuid generated at checkout time. */
  orderId: string
  courseId: CourseId
  studentName: string
  email: string
  phone: string
  /** Amount in LKR. */
  amount: number
  currency: 'LKR'
}

export interface CheckoutResult {
  /** URL to redirect the student to for payment. */
  redirectUrl: string
}

export interface PaymentProvider {
  /** Create a checkout session/redirect for a booking. */
  createCheckout(booking: Booking): Promise<CheckoutResult>
  /**
   * Verify an incoming payment notification (webhook) is authentic.
   * Return the verified booking order id, or null if verification fails.
   */
  verifyNotification(payload: Record<string, string>): Promise<string | null>
}
