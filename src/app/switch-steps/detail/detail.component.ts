import { Component, OnInit } from '@angular/core';
import { SwitchService } from '../../switch.service';
import { Router } from '@angular/router';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { NgxSpinnerService } from 'ngx-spinner';

@Component({
  selector: 'app-detail',
  templateUrl: './detail.component.html',
  styleUrls: ['./detail.component.css']
})
export class DetailComponent implements OnInit {
  switchType: string = '';
  constructor(private router: Router, public switchService: SwitchService, private fb: FormBuilder, private spinner: NgxSpinnerService) {

  }

  ngOnInit() {
    this.switchService.updateForm = false;
    if (localStorage.getItem("userId") !== null) {
      this.switchType = this.switchService.currentUrl;
    }
    else {
      this.router.navigate(['']);
    }
  }

  openPage(page: string) {
    this.switchService.updateForm = true;
    this.router.navigate([this.switchType + '/' + page]);
  }
  submitDetails() {
    var supplyAddressArr = this.switchService.step1Obj.supplyAddress.split(" ");
    var position = (supplyAddressArr.length) / 4;
    var address1 = supplyAddressArr.slice(0, position);
    var address2 = supplyAddressArr.slice(position, position * 2);
    var address3 = supplyAddressArr.slice(position * 2, position * 3);
    var address4 = supplyAddressArr.slice(position * 3, position * 4);

    var MainDetailsData = [
      {
        "Key": "address 1",
        "Value": address1.join(" ")
      },
      {
        "Key": "address 2",
        "Value": address2.join(" ")
      },
      {
        "Key": "address 3",
        "Value": address3.join(" ")
      },
      {
        "Key": "address 4",
        "Value": address4.join(" ")
      },
      {
        "Key": "post code",
        "Value": this.switchService.step1Obj.postCode
      },
      {
        "Key": "billing address1",
        "Value": this.switchService.addressObj.billingAddressLine1 ? this.switchService.addressObj.billingAddressLine1 : ''
      },
      {
        "Key": "billing address2",
        "Value": this.switchService.addressObj.billingAddressLine2 ? this.switchService.addressObj.billingAddressLine2 : ''
      },
      {
        "Key": "billing address3",
        "Value": (this.switchService.addressObj.billingCity ? this.switchService.addressObj.billingCity : '') + " " + (this.switchService.addressObj.billingCountry ? this.switchService.addressObj.billingCountry : '')
      },
      {
        "Key": "billing postcode",
        "Value": this.switchService.addressObj.billingPostCode ? this.switchService.addressObj.billingPostCode : ''
      },
      {
        "Key": "bank name",
        "Value": this.switchService.paymentObj.checkManual ? this.switchService.paymentObj.manualBankName : this.switchService.paymentObj.bankName
      },
      {
        "Key": "bank account name",
        "Value": this.switchService.paymentObj.accountHolderName
      },
      {
        "Key": "account number",
        "Value": this.switchService.paymentObj.accountNumber
      },
      {
        "Key": "sort code",
        "Value": this.switchService.paymentObj.sortCode
      },
      {
        "Key": "email",
        "Value": this.switchService.personalObj.emailAddress
      },
      {
        "Key": "mobile",
        "Value": this.switchService.personalObj.mobileNo
      },
      {
        "Key": "business type",
        "Value": this.switchService.personalObj.companyType
      },
      {
        "Key": "contact name",
        "Value": this.switchService.personalObj.name
      },
      {
        "Key": "premises name",
        "Value": this.switchService.personalObj.companyName
      },
      {
        "Key": "previous address1",
        "Value": this.switchService.addressObj.prevAddressLine1 ? this.switchService.addressObj.prevAddressLine1 : ''
      },
      {
        "Key": "previous address2",
        "Value": this.switchService.addressObj.prevAddressLine2 ? this.switchService.addressObj.prevAddressLine2 : ''
      },
      {
        "Key": "previous address3",
        "Value": (this.switchService.addressObj.prevCity ? this.switchService.addressObj.prevCity : '') + " " + (this.switchService.addressObj.prevCountry ? this.switchService.addressObj.prevCountry : '')
      },
      {
        "Key": "previous postcode",
        "Value": this.switchService.addressObj.prevPostCode ? this.switchService.addressObj.prevPostCode : ''
      },
      {
        "Key": "company number",
        "Value": this.switchService.personalObj.companyRegNo
      },
      {
        "Key": "payment method",
        "Value": this.switchService.step2Obj.billingType
      }

    ]
    var ItsAGasContract = false;
    if (this.switchType == "electricity") {
      ItsAGasContract = false;
      MainDetailsData.push({
        "Key": "current electric supplier 1",
        "Value": this.switchService.step2Obj.checkManual ? this.switchService.step2Obj.manualCurrentSupplier : this.switchService.step2Obj.currentSupplier
      });
      MainDetailsData.push({
        "Key": "mpan top line 1",
        "Value": this.switchService.step1Obj.MPANTopLineNo
      });
      MainDetailsData.push({
        "Key": "mpan bottom line 1",
        "Value": this.switchService.step1Obj.MPANBottomLineNo
      });
      MainDetailsData.push({
        "Key": "new supplier electricity",
        "Value": this.switchService.step3Obj.supplier.Supplier
      });
    }
    else {
      ItsAGasContract = true;
      MainDetailsData.push({
        "Key": "current gas supplier 1",
        "Value": this.switchService.step2Obj.currentSupplier ? this.switchService.step2Obj.currentSupplier : this.switchService.step2Obj.manualCurrentSupplier
      });
      MainDetailsData.push({
        "Key": "mpr 1",
        "Value": this.switchService.step1Obj.MPRNNo
      });
      MainDetailsData.push({
        "Key": "new supplier gas",
        "Value": this.switchService.step3Obj.supplier.Supplier
      });
    }

    var UsageRatesData = [
      {
        "Key": "daycharge",
        "Value": this.switchService.step3Obj.supplier.DayUnitrate
      },
      {
        "Key": "nightcharge",
        "Value": this.switchService.step3Obj.supplier.NightUnitrate
      },
      {
        "Key": "eveandwendcharge",
        "Value": "0"
      },
      {
        "Key": "standing charge",
        "Value": this.switchService.step3Obj.supplier.StandingCharge
      },
      {
        "Key": "dayusage",
        "Value": this.switchService.step2Obj.consumption
      },
      {
        "Key": "nightusage",
        "Value": "0"
      },
      {
        "Key": "eveandwendusage",
        "Value": "0"
      }
    ]


    delete this.switchService.step1Obj.addresses;
    delete this.switchService.step3Obj.prices;

    var quotationDetails = {
      step1Obj: this.switchService.step1Obj,
      step2Obj: this.switchService.step2Obj,
      step3Obj: this.switchService.step3Obj,
      personalObj: this.switchService.personalObj,
      addressObj: this.switchService.addressObj,
      paymentObj: this.switchService.paymentObj,
      currentUrl: this.switchService.currentUrl,
      userId: localStorage.getItem("userId")
    }

    var request = {
      ItsAGasContract: ItsAGasContract,
      MainDetailsData: MainDetailsData,
      UsageRatesData: UsageRatesData,
      quotationDetails: quotationDetails
    }
    this.switchService.sendDocuSign(request).subscribe(
      (data: any) => {
        this.spinner.hide();
        console.log(data);
        if (data.code == 200) {
          localStorage.removeItem("stepsId");
          this.router.navigate(['thankyou']);
        }
        else {
          alert(data.message);
        }
      },
      err => this.spinner.hide(),
      () => this.spinner.hide()
    );
  }
}
