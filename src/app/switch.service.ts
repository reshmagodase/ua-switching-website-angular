import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { NgxSpinnerService } from 'ngx-spinner';

const httpOptions = {
  headers: new HttpHeaders({ 'Content-Type': 'application/json' })
};
@Injectable({
  providedIn: 'root'
})
export class SwitchService {
  stepsId: string = '';
  step1Obj: any = {};
  step2Obj: any = {};
  step3Obj: any = {};
  personalObj: any = {};
  addressObj: any = {};
  paymentObj: any = {};
  currentUrl: string = '';
  updateForm: boolean = false;


  constructor(private http: HttpClient, private spinner: NgxSpinnerService) {
    /* this.step1Obj = { "addresses": [{ "AddressAsLine": "HARRP2ZZ HARROW-ON-THE-HILL SPS LOWLANDS ROAD LOWLANDS ROAD MIDDLESEX HA1 3AW", "currentgspgroupid": "_A", "AddressLine1": "HARRP2ZZ", "linelossfactor": "205", "amrMeter": true, "AddressLine3": "LOWLANDS ROAD", "MPANCore": "1023538759594", "Postcode": "HA1 3AW", "energisationstatus": "E", "meterserialnumber": "E08BG05227", "elecmeterserialnumber": "E08BG05227", "profileclass": "04", "keyMeter": false, "AddressLine8": "MIDDLESEX", "AddressLine2": "HARROW-ON-THE-HILL SPS", "AddressLine5": "LOWLANDS ROAD", "stdsettlementconfig": "0244", "mpantradingstatus": "T", "metertype": "RCAMR", "metertimeswitchclass": "807" }, { "AddressAsLine": "SECOND FLOOR GROVE HOUSE LOWLANDS ROAD HARROW MIDDLESEX HA1 3AW", "currentgspgroupid": "_A", "AddressLine1": "SECOND FLOOR", "linelossfactor": "239", "amrMeter": true, "AddressLine3": "GROVE HOUSE", "MPANCore": "1012853996435", "Postcode": "HA1 3AW", "AddressLine9": "MIDDLESEX", "energisationstatus": "E", "meterserialnumber": "E10BG29256", "elecmeterserialnumber": "E10BG29256", "profileclass": "03", "keyMeter": false, "AddressLine8": "HARROW", "mpantradingstatus": "T", "AddressLine5": "LOWLANDS ROAD", "stdsettlementconfig": "0393", "metertype": "RCAMY", "metertimeswitchclass": "801" }, { "AddressAsLine": "THIRD FLOOR GROVE HOUSE LOWLANDS ROAD HARROW MIDDLESEX HA1 3AW", "currentgspgroupid": "_A", "AddressLine1": "THIRD FLOOR", "linelossfactor": "201", "amrMeter": true, "AddressLine3": "GROVE HOUSE", "MPANCore": "1012853996667", "Postcode": "HA1 3AW", "AddressLine9": "MIDDLESEX", "energisationstatus": "E", "meterserialnumber": "E12Z008938", "elecmeterserialnumber": "E12Z008938", "profileclass": "03", "keyMeter": false, "AddressLine8": "HARROW", "mpantradingstatus": "T", "AddressLine5": "LOWLANDS ROAD", "stdsettlementconfig": "0393", "metertype": "RCAMY", "metertimeswitchclass": "801" }, { "AddressAsLine": "NON POSTAL TELECOMMUNICATIONS MAST ORANGE GLN7423 35 LOWLANDS ROAD HARROW HA1 3AW", "currentgspgroupid": "_A", "AddressLine1": "NON POSTAL", "linelossfactor": "205", "amrMeter": true, "AddressLine3": "35", "MPANCore": "1050000768727", "Postcode": "HA1 3AW", "energisationstatus": "E", "meterserialnumber": "214062010", "elecmeterserialnumber": "214062010", "profileclass": "04", "keyMeter": false, "AddressLine8": "HARROW", "AddressLine2": "TELECOMMUNICATIONS MAST ORANGE GLN7423", "AddressLine5": "LOWLANDS ROAD", "stdsettlementconfig": "0151", "mpantradingstatus": "T", "metertype": "RCAMY", "metertimeswitchclass": "811" }, { "AddressAsLine": "KIOSK AT 37 LOWLANDS ROAD HARROW HA1 3AW", "AddressLine2": "KIOSK AT", "currentgspgroupid": "_A", "linelossfactor": "205", "amrMeter": true, "AddressLine3": "37", "MPANCore": "1050001153175", "Postcode": "HA1 3AW", "energisationstatus": "E", "meterserialnumber": "E16UP08190", "elecmeterserialnumber": "E16UP08190", "profileclass": "04", "keyMeter": false, "AddressLine8": "HARROW", "mpantradingstatus": "T", "AddressLine5": "LOWLANDS ROAD", "stdsettlementconfig": "0244", "metertype": "RCAMY", "metertimeswitchclass": "807" }, { "AddressAsLine": "37 LOWLANDS ROAD HARROW HA1 3AW", "currentgspgroupid": "_A", "linelossfactor": "239", "amrMeter": false, "AddressLine3": "37", "MPANCore": "1012853992750", "Postcode": "HA1 3AW", "energisationstatus": "E", "meterserialnumber": "L77E002687", "elecmeterserialnumber": "L77E002687", "profileclass": "03", "keyMeter": false, "AddressLine8": "HARROW", "mpantradingstatus": "T", "AddressLine5": "LOWLANDS ROAD", "stdsettlementconfig": "0393", "metertype": "N", "metertimeswitchclass": "801" }, { "AddressAsLine": "39 LOWLANDS ROAD HARROW HA1 3AW", "currentgspgroupid": "_A", "linelossfactor": "201", "amrMeter": true, "AddressLine3": "39", "MPANCore": "1023536839324", "Postcode": "HA1 3AW", "energisationstatus": "E", "meterserialnumber": "K10UP03465", "elecmeterserialnumber": "K10UP03465", "profileclass": "03", "keyMeter": false, "AddressLine8": "HARROW", "mpantradingstatus": "T", "AddressLine5": "LOWLANDS ROAD", "stdsettlementconfig": "0393", "metertype": "RCAMY", "metertimeswitchclass": "801" }, { "AddressAsLine": "LOWLANDS HOUSE 51 45 LOWLANDS ROAD HARROW MIDDLESEX HA1 3AW", "currentgspgroupid": "_A", "AddressLine1": "LOWLANDS HOUSE 51", "linelossfactor": "086", "amrMeter": false, "AddressLine3": "45", "MPANCore": "1014568593075", "Postcode": "HA1 3AW", "energisationstatus": "E", "meterserialnumber": "213552003", "elecmeterserialnumber": "213552003", "profileclass": "00", "keyMeter": false, "AddressLine8": "HARROW", "mpantradingstatus": "T", "AddressLine5": "LOWLANDS ROAD", "AddressLine9": "MIDDLESEX", "metertype": "H", "metertimeswitchclass": "900" }, { "AddressAsLine": "GAMCOM SOLUTIONS LTD GROVE HOUSE;55 LOWLANDS ROAD HARROW HA1 3AW", "currentgspgroupid": "_A", "AddressLine1": "GAMCOM SOLUTIONS LTD", "linelossfactor": "201", "amrMeter": true, "AddressLine3": "GROVE HOUSE;55", "MPANCore": "1012853996899", "Postcode": "HA1 3AW", "energisationstatus": "E", "meterserialnumber": "E12Z009577", "elecmeterserialnumber": "E12Z009577", "profileclass": "03", "keyMeter": false, "AddressLine8": "HARROW", "mpantradingstatus": "T", "AddressLine5": "LOWLANDS ROAD", "stdsettlementconfig": "0393", "metertype": "RCAMY", "metertimeswitchclass": "801" }, { "AddressAsLine": "GLOBAL METCORP LTD GROVE HOUSE;55 LOWLANDS ROAD HARROW HA1 3AW", "currentgspgroupid": "_A", "AddressLine1": "GLOBAL METCORP LTD", "linelossfactor": "239", "amrMeter": false, "AddressLine3": "GROVE HOUSE;55", "MPANCore": "1012853996203", "Postcode": "HA1 3AW", "energisationstatus": "E", "meterserialnumber": "L66E013502", "elecmeterserialnumber": "L66E013502", "profileclass": "03", "keyMeter": false, "AddressLine8": "HARROW", "mpantradingstatus": "T", "AddressLine5": "LOWLANDS ROAD", "stdsettlementconfig": "0393", "metertype": "N", "metertimeswitchclass": "801" }, { "AddressAsLine": "ALLIED DUNBAR 67-71 LOWLANDS ROAD HARROW MIDDLESEX HA1 3AW", "currentgspgroupid": "_A", "AddressLine1": "ALLIED DUNBAR", "linelossfactor": "084", "amrMeter": false, "AddressLine3": "67-71", "MPANCore": "1014570203532", "Postcode": "HA1 3AW", "energisationstatus": "E", "meterserialnumber": "K97E61173", "elecmeterserialnumber": "K97E61173", "profileclass": "00", "keyMeter": false, "AddressLine8": "HARROW", "mpantradingstatus": "T", "AddressLine5": "LOWLANDS ROAD", "AddressLine9": "MIDDLESEX", "metertype": "H", "metertimeswitchclass": "845" }, { "AddressAsLine": "F/P, LONDON BOROUGH OF HARROW O/S LOWLANDS RECREATION GROUND TECHNOLOGY HOUSE 73-77 LOWLANDS ROAD OUTSIDE LOWLANDS RECREATION GROUND HARROW HA1 3AW", "currentgspgroupid": "_A", "AddressLine1": "F/P, LONDON BOROUGH OF HARROW", "linelossfactor": "201", "amrMeter": true, "AddressLine3": "TECHNOLOGY HOUSE 73-77", "MPANCore": "1050000607151", "Postcode": "HA1 3AW", "energisationstatus": "E", "meterserialnumber": "E14Z009077", "elecmeterserialnumber": "E14Z009077", "profileclass": "03", "keyMeter": false, "AddressLine8": "HARROW", "AddressLine2": "O/S LOWLANDS RECREATION GROUND", "AddressLine7": "OUTSIDE LOWLANDS RECREATION GROUND", "AddressLine5": "LOWLANDS ROAD", "stdsettlementconfig": "0393", "mpantradingstatus": "T", "metertype": "RCAMR", "metertimeswitchclass": "801" }, { "AddressAsLine": "73-77 LOWLANDS ROAD HARROW MIDDLESEX HA1 3AW", "currentgspgroupid": "_A", "linelossfactor": "086", "amrMeter": false, "AddressLine3": "73-77", "MPANCore": "1015681952460", "Postcode": "HA1 3AW", "energisationstatus": "E", "meterserialnumber": "E10BG79056", "elecmeterserialnumber": "E10BG79056", "profileclass": "00", "keyMeter": false, "AddressLine8": "HARROW", "mpantradingstatus": "T", "AddressLine5": "LOWLANDS ROAD", "AddressLine9": "MIDDLESEX", "metertype": "H", "metertimeswitchclass": "845" }], "MPANBottomLineNo": "123456789", "MPANTopLineNo": "03801239", "postCode": "fdg", "supplyAddress": "HARRP2ZZ HARROW-ON-THE-HILL SPS LOWLANDS ROAD LOWLANDS ROAD MIDDLESEX HA1 3AW", "completed": true }
    this.step2Obj = { "annualSpend": 100, "annualUsage": "", "contractEndDate": "2018-06-06T18:30:00.000Z", "currentSupplier": "E-ON", "manualCurrentSupplier": "", "checkManual": false, "billingType": "Quarterly Direct Debit", "smartMeter": "", "consumption": "769", "spendAmount": 100, "completed": true };
    this.step3Obj = { "supplier": { "AnnualPrice": "£73.00", "BaseAnnualPrice": null, "CapacityCharge": null, "ChequeSurcharge": null, "Commission": "£0.00", "ContractEndDate": null, "DayUnitrate": "13.86700", "DirectDebitDiscount": null, "ExtraInfo": "", "Fits": null, "FixedFee": null, "FixedFeeSCUplift": null, "FixedFeeUplift": null, "FlatDirectDebitDiscount": 0, "FooterMessage": "", "NightUnitrate": "0.00000", "NoQuoteReason": "", "OutsidePricingWindow": false, "Period": null, "PlanType": null, "PricebookVersion": null, "RawAnnualPrice": 73, "RawBaseAnnualPrice": 0, "RawCommission": 0, "ReactiveRate": null, "Ref": null, "Renewal": false, "SC": null, "StandingCharge": "20.00000", "Stod1": null, "Stod2": null, "Stod3": null, "Stod4": null, "Stod5": null, "Stod6": null, "Supplier": "Clear Business", "TariffCode": "", "Term": "1", "TransportationCharge": null, "Uplift": "2", "WendUnitrate": "0.00000" } }
    this.personalObj = { "name": "sdfsd", "companyName": "fgf", "companyType": "Public Limited Company", "companyRegNo": "234", "mobileNo": "98745", "emailAddress": "chetan@scriptlanes.com", "confirmEmailAddress": "chetan@scriptlanes.com", "password": "123", "confirmPassword": "123" }
    this.addressObj = { "residentialStatus": "", "yearsAtProperty": "", "monthsAtProperty": "", "prevAddressLine1": "", "prevAddressLine2": "", "prevCity": "", "prevCountry": "", "prevPostCode": "", "checkBillingAddress": false, "billingAddressLine1": "", "billingAddressLine2": "", "billingCity": "", "billingCountry": "", "billingPostCode": "" }
    this.paymentObj = { "accountHolderName": "Chetan", "sortCode": "111111", "accountNumber": "11111111", "bankName": "Clydesdale Bank", "checkManual": false, "terms": true, "manualBankName": "" }
    this.currentUrl = "electricity"  */
  }

  getSupplyAddresses(request) {
    this.spinner.show();
    return this.http.post('/api/getSupplyAddresses', request, httpOptions)
    //return this.http.get('/assets/address.json', httpOptions)
  }
  getElectricPricesList(request) {
    this.spinner.show();
    return this.http.post('/api/getElectricPrices', request)
    //return this.http.get('/assets/prices.json', httpOptions)
  }
  getGasPricesList(request) {
    this.spinner.show();
    return this.http.post('/api/getGasPrices', request)
    //return this.http.get('/assets/prices.json', httpOptions)
  }

  sendDocuSign(request) {
    this.spinner.show();
    return this.http.post('/api/sendDocuSign', request)
  }


  getPostCode() {
    this.spinner.show();
    return this.http.get('/api/getPostCode', httpOptions)
  }
  
  checkEmail(request) {
    this.spinner.show();
    return this.http.post('/api/checkEmail', request)
  }

    



  login(request) {
    this.spinner.show();
    return this.http.post('/api/login', request)
  }

  logout() {
    localStorage.removeItem("userId");
    localStorage.removeItem("userID");
    localStorage.removeItem("stepsId");
    localStorage.removeItem("name");
    this.spinner.show();
    return this.http.get('/api/logout', httpOptions)
  }


  saveSteps(request) {
    this.spinner.show();
    return this.http.post('/api/steps', request)
  }

  getSteps(request) {
    this.spinner.show();
    return this.http.get('/api/steps/' + request.stepsId, httpOptions)
  }

      
  registerUser(request) {
    this.spinner.show();
    return this.http.post('/api/users', request)
  }

  updateUser(request) {
    this.spinner.show();
    return this.http.put('/api/users/' + request.userId, request)
  }

  getUser(request) {
    this.spinner.show();
    return this.http.get('/api/users/' + request.userId, httpOptions)
  }

  getQuotations(request) {
    this.spinner.show();
    return this.http.get('/api/quotations?userId=' + request.userId, httpOptions)
  }

  changePassword(request) {
    this.spinner.show();
    return this.http.post('/api/changePassword', request)
  }

}

