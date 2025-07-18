import { TrackingRecord } from '../types/TrackingRecord';

export const sampleTrackingData: TrackingRecord[] = [
  {
    id: '1',
    customer: 'ABC Corp',
    ref: 'REF001',
    file: 'F001',
    workOrder: 'WO001',
    dropDate: '2024-01-15',
    returnDate: '2024-01-20',
    docsSent: true,
    docsReceived: true,
    aesMblVgmSent: true,
    docCutoffDate: '2024-01-18',
    titlesDispatched: 'Yes',
    validatedFwd: true,
    titlesReturned: 'Yes',
    sslDraftInvRec: true,
    draftInvApproved: true,
    transphereInvSent: true,
    paymentRec: true,
    sslPaid: true,
    insured: true,
    released: true,
    docsSentToCustomer: true,
    notes: 'Completed successfully',
    archived: false,
    userId: 'user1'
  },
  {
    id: '2',
    customer: 'XYZ Ltd',
    ref: 'REF002',
    file: 'F002',
    workOrder: 'WO002',
    dropDate: '2024-01-16',
    returnDate: '2024-01-22',
    docsSent: false,
    docsReceived: false,
    aesMblVgmSent: false,
    docCutoffDate: '2024-01-19',
    titlesDispatched: 'No',
    validatedFwd: false,
    titlesReturned: 'No',
    sslDraftInvRec: false,
    draftInvApproved: false,
    transphereInvSent: false,
    paymentRec: false,
    sslPaid: false,
    insured: false,
    released: false,
    docsSentToCustomer: false,
    notes: 'Pending documentation',
    archived: false,
    userId: 'user1'
  },
  {
    id: '3',
    customer: 'DEF Inc',
    ref: 'REF003',
    file: 'F003',
    workOrder: 'WO003',
    dropDate: '2024-01-17',
    returnDate: '2024-01-23',
    docsSent: true,
    docsReceived: false,
    aesMblVgmSent: true,
    docCutoffDate: '2024-01-20',
    titlesDispatched: 'Yes',
    validatedFwd: true,
    titlesReturned: 'No',
    sslDraftInvRec: true,
    draftInvApproved: false,
    transphereInvSent: false,
    paymentRec: false,
    sslPaid: false,
    insured: true,
    released: false,
    docsSentToCustomer: false,
    notes: 'Waiting for title return',
    archived: false,
    userId: 'user1'
  },
  {
    id: '4',
    customer: 'GHI Co',
    ref: 'REF004',
    file: 'F004',
    workOrder: 'WO004',
    dropDate: '2024-01-18',
    returnDate: '2024-01-24',
    docsSent: true,
    docsReceived: true,
    aesMblVgmSent: false,
    docCutoffDate: '2024-01-21',
    titlesDispatched: 'Select',
    validatedFwd: false,
    titlesReturned: 'Select',
    sslDraftInvRec: false,
    draftInvApproved: false,
    transphereInvSent: false,
    paymentRec: false,
    sslPaid: false,
    insured: false,
    released: false,
    docsSentToCustomer: false,
    notes: 'In progress',
    archived: false,
    userId: 'user1'
  },
  {
    id: '5',
    customer: 'JKL Partners',
    ref: 'REF005',
    file: 'F005',
    workOrder: 'WO005',
    dropDate: '2024-01-19',
    returnDate: '2024-01-25',
    docsSent: false,
    docsReceived: false,
    aesMblVgmSent: false,
    docCutoffDate: '2024-01-22',
    titlesDispatched: 'No',
    validatedFwd: false,
    titlesReturned: 'No',
    sslDraftInvRec: false,
    draftInvApproved: false,
    transphereInvSent: false,
    paymentRec: false,
    sslPaid: false,
    insured: false,
    released: false,
    docsSentToCustomer: false,
    notes: 'Just started',
    archived: false,
    userId: 'user1'
  },
  {
    id: '6',
    customer: 'MNO Group',
    ref: 'REF006',
    file: 'F006',
    workOrder: 'WO006',
    dropDate: '2024-01-20',
    returnDate: '2024-01-26',
    docsSent: true,
    docsReceived: true,
    aesMblVgmSent: true,
    docCutoffDate: '2024-01-23',
    titlesDispatched: 'Yes',
    validatedFwd: true,
    titlesReturned: 'Yes',
    sslDraftInvRec: true,
    draftInvApproved: true,
    transphereInvSent: true,
    paymentRec: true,
    sslPaid: true,
    insured: true,
    released: true,
    docsSentToCustomer: true,
    notes: 'Ready for dispatch',
    archived: false,
    userId: 'user1'
  },
  {
    id: '7',
    customer: 'PQR Solutions',
    ref: 'REF007',
    file: 'F007',
    workOrder: 'WO007',
    dropDate: '2024-01-21',
    returnDate: '2024-01-27',
    docsSent: false,
    docsReceived: false,
    aesMblVgmSent: false,
    docCutoffDate: '2024-01-24',
    titlesDispatched: 'No',
    validatedFwd: false,
    titlesReturned: 'No',
    sslDraftInvRec: false,
    draftInvApproved: false,
    transphereInvSent: false,
    paymentRec: false,
    sslPaid: false,
    insured: false,
    released: false,
    docsSentToCustomer: false,
    notes: 'Awaiting confirmation',
    archived: false,
    userId: 'user1'
  },
  {
    id: '8',
    customer: 'STU Enterprises',
    ref: 'REF008',
    file: 'F008',
    workOrder: 'WO008',
    dropDate: '2024-01-22',
    returnDate: '2024-01-28',
    docsSent: true,
    docsReceived: false,
    aesMblVgmSent: true,
    docCutoffDate: '2024-01-25',
    titlesDispatched: 'Yes',
    validatedFwd: true,
    titlesReturned: 'No',
    sslDraftInvRec: true,
    draftInvApproved: false,
    transphereInvSent: false,
    paymentRec: false,
    sslPaid: false,
    insured: true,
    released: false,
    docsSentToCustomer: false,
    notes: 'In transit',
    archived: false,
    userId: 'user1'
  },
  {
    id: '9',
    customer: 'VWX Innovations',
    ref: 'REF009',
    file: 'F009',
    workOrder: 'WO009',
    dropDate: '2024-01-23',
    returnDate: '2024-01-29',
    docsSent: true,
    docsReceived: true,
    aesMblVgmSent: false,
    docCutoffDate: '2024-01-26',
    titlesDispatched: 'Select',
    validatedFwd: false,
    titlesReturned: 'Select',
    sslDraftInvRec: false,
    draftInvApproved: false,
    transphereInvSent: false,
    paymentRec: false,
    sslPaid: false,
    insured: false,
    released: false,
    docsSentToCustomer: false,
    notes: 'Scheduled for delivery',
    archived: false,
    userId: 'user1'
  },
  {
    id: '10',
    customer: 'YZA Systems',
    ref: 'REF010',
    file: 'F010',
    workOrder: 'WO010',
    dropDate: '2024-01-24',
    returnDate: '2024-01-30',
    docsSent: false,
    docsReceived: false,
    aesMblVgmSent: false,
    docCutoffDate: '2024-01-27',
    titlesDispatched: 'No',
    validatedFwd: false,
    titlesReturned: 'No',
    sslDraftInvRec: false,
    draftInvApproved: false,
    transphereInvSent: false,
    paymentRec: false,
    sslPaid: false,
    insured: false,
    released: false,
    docsSentToCustomer: false,
    notes: 'Finalizing details',
    archived: false,
    userId: 'user1'
  }
];
