class Config {
  //BASE_URL = "https://medicalstoreapi.herokuapp.com/";
  //FOR LIVE URL
  // static loginUrl = "https://medicalstoreapi.herokuapp.com/api/gettoken/";
  // static refreshApiUrl =
  //   "https://medicalstoreapi.herokuapp.com/api/resfresh_token/";
  // static companyApiUrl = "https://medicalstoreapi.herokuapp.com/api/company/";
  // static homeApiUrl = "https://medicalstoreapi.herokuapp.com/api/home_api/";
  // static customerRequestApiUrl =
  //   "https://medicalstoreapi.herokuapp.com/api/customer_request/";
  // static medicineNameApiUrl =
  //   "https://medicalstoreapi.herokuapp.com/api/medicinebyname/";
  // static companyBankApiUrl =
  //   "https://medicalstoreapi.herokuapp.com/api/companybank/";
  // static generateBillApiUrl =
  //   "https://medicalstoreapi.herokuapp.com/api/generate_bill_api/";
  // static companyAccountApiUrl =
  //   "https://medicalstoreapi.herokuapp.com/api/companyaccount/";
  // static companyOnly = "https://medicalstoreapi.herokuapp.com/api/companyonly/";
  // static employeeApiURL = "https://medicalstoreapi.herokuapp.com/api/employee/";
  // static medicineApiUrl = "https://medicalstoreapi.herokuapp.com/api/medicine/";
  // static employeeBankApiUrl =
  //   "https://medicalstoreapi.herokuapp.com/api/employee_all_bank/";
  // static employeeBankApiUrlBYID =
  //   "https://medicalstoreapi.herokuapp.com/api/employee_bankby_id/";
  // static employeeSalaryApiUrl =
  //   "https://medicalstoreapi.herokuapp.com/api/employee_all_salary/";
  // static employeeSalaryByIdApiUrl =
  //   "https://medicalstoreapi.herokuapp.com/api/employee_salaryby_id/";

  //FOR TEST URL
  static loginUrl = "http://127.0.0.1:8000/api/gettoken/";
  static refreshApiUrl = "http://127.0.0.1:8000/api/resfresh_token/";
  static companyApiUrl = "http://127.0.0.1:8000/api/company/";
  static homeApiUrl = "http://127.0.0.1:8000/api/home_api/";
  static customerRequestApiUrl = "http://127.0.0.1:8000/api/customer_request/";
  static medicineNameApiUrl = "http://127.0.0.1:8000/api/medicinebyname/";
  static companyBankApiUrl = "http://127.0.0.1:8000/api/companybank/";
  static generateBillApiUrl = "http://127.0.0.1:8000/api/generate_bill_api/";
  static companyAccountApiUrl = "http://127.0.0.1:8000/api/companyaccount/";
  static companyOnly = "http://127.0.0.1:8000/api/companyonly/";
  static employeeApiURL = "http://127.0.0.1:8000/api/employee/";
  static medicineApiUrl = "http://127.0.0.1:8000/api/medicine/";
  static employeeBankApiUrl = "http://127.0.0.1:8000/api/employee_all_bank/";
  static employeeBankApiUrlBYID =
    "http://127.0.0.1:8000/api/employee_bankby_id/";
  static employeeSalaryApiUrl =
    "http://127.0.0.1:8000/api/employee_all_salary/";
  static employeeSalaryByIdApiUrl =
    "http://127.0.0.1:8000/api/employee_salaryby_id/";
  static homeUrl = "/home";
  static logoutPageUrl = "/logout";

  static sidebarItem = [
    { index: "0", title: "Home", url: "/home", icons: "home" },
    { index: "1", title: "Company", url: "/company", icons: "apartment" },
    {
      index: "2",
      title: "Add Medicine",
      url: "/addMedicine",
      icons: "domain_add",
    },
    {
      index: "3",
      title: "Manage Medicine",
      url: "/manageMedicine",
      icons: "medication",
    },
    {
      index: "4",
      title: "Manage Company Account",
      url: "/manageCompanyAccount",
      icons: "account_balance",
    },
    {
      index: "5",
      title: "Manage Employee",
      url: "/employeeManage",
      icons: "badge",
    },
    {
      index: "6",
      title: "Generate Bill",
      url: "/generateBill",
      icons: "receipt_long",
    },
    {
      index: "7",
      title: "Customer Request",
      url: "/customerRequest",
      icons: "support_agent",
    },
  ];
}

export default Config;
