export const environment = {
  production: false,
  BASE_URL:'http://localhost:3000',
  CUSTOMER_BASE_URL:'http://localhost:3000/customers/',
  CUSTOMER: {
      GET_ALL_CUSTOMER: 'list',
      GET_CUSTOMER: 'view',
      UPDATE_CUSTOMER: 'update',
      DELETE_CUSTOMER: 'delete',
      ADD_CUSTOMER: 'add',
      SEARCH_CUSTOMER: 'search',
  },
  LOAN_BASE_URL:'http://localhost:3000/loans/',
  LOAN: {
      GET_ALL_LOANS: 'list',
      GET_LOAN: 'view',
      UPDATE_LOAN: 'update',
      DELETE_LOAN: 'delete',
      ADD_LOAN: 'add',
      SEARCH_LOAN: 'search',
 }, 
 INVOICE_BASE_URL:'http://localhost:3000/invoices/',
 INVOICE: {
    GET_ALL_INVOICE: 'list',
    GET_INVOICE: 'view',
    UPDATE_INVOICE: 'update',
    DELETE_INVOICE: 'delete',
    ADD_INVOICE: 'add',
    SEARCH_INVOICE: 'search',
 }, 
};
