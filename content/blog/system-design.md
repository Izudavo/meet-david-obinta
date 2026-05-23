---
title: "Thinking in Systems: From Features to Architecture"
date: "2026-04-05"
image: "/blog/code-img.jpeg"
excerpt: "How I shifted from writing features to designing scalable systems."
---

I stopped thinking in terms of features and started thinking in systems.

Now I design:
- Data flow before UI
- API structure before pages
- Failure handling before features

This mindset changed how I build everything.

---

## A Real-World Example: Gift Card Trading System

One of the clearest examples of this shift is a **gift card trading platform** I built. Instead of jumping into UI screens or APIs, I started by defining the system behavior first.

---

## 1. UI/UX Layer (User Actions First)

The UI was designed around real-world user flows, not pages:

- User submits a gift card trade request  
- User uploads proof (image or e-code)  
- User tracks trade status: PENDING → APPROVED → REJECTED → FAILED  
- User manages wallet balance (available vs locked funds)  
- User requests withdrawals  

Core UX principle:
> Every user action must map directly to a backend state transition.

The UI is not just design — it is a **reflection of system state**.

---

## 2. Frontend Layer (Flutter + Admin Dashboard)

I separated concerns across two clients:

### Mobile App (Flutter)
- Trade submission flow with validation rules  
- Image upload via multipart requests  
- OTP authentication flow  
- Wallet dashboard (available vs locked balance)  

### Admin Panel (Next.js)
- Trade review dashboard  
- Approval / rejection workflows  
- Wallet adjustments with audit logs  
- Withdrawal processing  

The frontend is not the system — it is a **state visualization layer of the backend**.

---

## 3. Backend Architecture (Express + Prisma + MySQL)

This is where the system logic lives.

### Core Entities:
- Users (soft delete enabled)  
- Wallets (source of truth for balances)  
- WalletTransactions (ledger system)  
- Trades (PENDING / APPROVED / REJECTED / FAILED)  
- Withdrawals (approval-based workflow)  

---

### Key Design Decisions

**1. Wallet Model**
- Split into `available_balance` and `locked_balance`
- Prevents double spending during active trades

**2. Trade Immutability**
- Trades are never overwritten
- Every state change is tracked

**3. Withdrawal Safety Rule**
- Only one pending withdrawal per user allowed

**4. Auditability**
- Every admin action is logged for traceability

---

## 4. Trade Flow (Core System Logic)

1. User submits trade  
2. System locks wallet funds  
3. Trade enters PENDING state  
4. Admin reviews trade  
5. If approved:
   - Wallet is updated  
   - Transaction is recorded  
6. If rejected:
   - Funds are unlocked  

This ensures:
> No money moves without traceable state transitions.

---

## 5. Background Processing & Reliability

To handle real-world system behavior:

- OTP resend protection using DB cooldown logic  
- Email notifications via Resend  
- Telegram reminders using cron jobs  
- Escalation workflows for pending actions  

Core principle:
> Anything that can fail asynchronously must be tracked and retry-safe.

---

## 6. System Thinking Shift

Instead of asking:

- “What feature do I build next?”

I now ask:

- What is the source of truth?
- What happens if this request fails halfway?
- How do we recover consistency in the database?
- What states does this system transition through?

---

## Final Perspective

I no longer think in screens or endpoints.

I think in systems:

- State machines  
- Data flow  
- Failure handling  
- Consistency  
- Scalability  

> UI is just the surface. The system underneath is what actually matters.