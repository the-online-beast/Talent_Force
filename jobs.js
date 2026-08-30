// jobs.js
const SHEET_URL     = 'https://docs.google.com/spreadsheets/d/e/2PACX-1vQ9QzCVwQaIHLnkN39Wf0RZkYaZPyExQU6mSQwBc0KArEsYr5ThsPw1injWhFwTYR8-T91RTBPbXAvk/pub?gid=0&single=true&output=csv';
const APPLY_WEBHOOK = 'https://n8n.strength-os.tech/webhook/4ae2ec57-82ba-415d-bcc8-e14348d74e25';
const DRIVE_FOLDER  = 'https://drive.google.com/drive/folders/1Y7a04q__ybAgrNVLhTvnLNBWuChc-E5f';

// Webhooks additionnels (si besoin côté admin plus tard)
const GET_JOBS_WEBHOOK    = 'https://n8n.strength-os.tech/webhook/a6feb9f4-37f2-40c6-9fb3-8841183676dc';
const ADD_JD_WEBHOOK      = 'https://n8n.strength-os.tech/webhook/22b4fee3-7158-47e3-b687-24d43f97fdb1';
const CHANGE_STATUS_JD    = 'https://n8n.strength-os.tech/webhook-test/b78a41c4-f119-4865-b3b4-8c8e1208efd1';
const JD_DRIVE_FOLDER     = 'https://drive.google.com/drive/folders/12AWghBEMuctUDL8uviOxI0H7tlTHeZjo';