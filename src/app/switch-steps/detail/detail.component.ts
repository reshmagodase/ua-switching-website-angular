import { Component, OnInit } from '@angular/core';
import { SwitchService } from '../switch.service';
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
  constructor(private router: Router, private switchService: SwitchService, private fb: FormBuilder, private spinner: NgxSpinnerService) {

  }

  ngOnInit() {
    this.switchService.updateForm = false;
    if (this.switchService.currentUrl == "") {
      this.router.navigate(['']);
    }
    else {
      this.switchType = this.switchService.currentUrl;
    }
  }

  openPage(page: string) {
    this.switchService.updateForm = true;
    this.router.navigate([this.switchType + '/' + page]);
  }
  submitDetails() {
    var MainDetailsData = [
      {
        "Key": "address 1",
        "Value": this.switchService.step1Obj.supplyAddress
      },
      {
        "Key": "address 2",
        "Value": ""
      },
      {
        "Key": "address 3",
        "Value": ""
      },
      {
        "Key": "address 4",
        "Value": ""
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
        "Value": this.switchService.paymentObj.bankName ? this.switchService.paymentObj.bankName : this.switchService.paymentObj.manualBankName
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
        "Value": this.switchService.step2Obj.currentSupplier ? this.switchService.step2Obj.currentSupplier : this.switchService.step2Obj.manualCurrentSupplier
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


    var request = {
      ItsAGasContract: ItsAGasContract,
      MainDetailsData: MainDetailsData,
      UsageRatesData: UsageRatesData
    }
    this.switchService.sendDocuSign(request).subscribe(
      (data: any) => {
        this.spinner.hide();

        if (data.SendDocusignResult.Error == null) {
          this.router.navigate(['thankyou']);
        }
        else {
          alert(data.SendDocusignResult.Error.Message);
        }
      },
      err => this.spinner.hide(),
      () => this.spinner.hide()
    );
  }
}
