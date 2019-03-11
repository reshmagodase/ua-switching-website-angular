import { Component, OnInit } from "@angular/core";
import { SwitchService } from "../../switch.service";
import { Router } from "@angular/router";
import { FormBuilder, FormGroup, Validators } from "@angular/forms";
import { NgxSpinnerService } from "ngx-spinner";
import Swal from "sweetalert2";

@Component({
  selector: "app-detail",
  templateUrl: "./detail.component.html",
  styleUrls: ["./detail.component.css"]
})
export class DetailComponent implements OnInit {
  switchType: string = "";
  constructor(
    private router: Router,
    public switchService: SwitchService,
    private fb: FormBuilder,
    private spinner: NgxSpinnerService
  ) { }

  ngOnInit() {
    this.switchService.updateForm = false;
    if (
      localStorage.getItem("stepsId") !== null &&
      localStorage.getItem("userId") !== null
    ) {
      this.switchService
        .getSteps({ stepsId: localStorage.getItem("stepsId") })
        .subscribe(
          (data: any) => {
            this.switchService.step1Obj = data.step1Obj;
            this.switchService.step2Obj = data.step2Obj;
            this.switchService.step3Obj = data.step3Obj;
            this.switchService.currentUrl = data.switchType;
            this.switchType = data.switchType;
            this.spinner.hide();

            if (localStorage.getItem("userId") !== null) {
              this.switchService
                .getUser({ userId: localStorage.getItem("userId") })
                .subscribe(
                  (data: any) => {
                    this.switchService.personalObj = data;
                    this.switchService.addressObj = data.addressObj
                      ? data.addressObj
                      : {};
                    this.switchService.paymentObj = data.paymentObj
                      ? data.paymentObj
                      : {};
                    this.spinner.hide();
                  },
                  err => {
                    this.spinner.hide();
                  },
                  () => this.spinner.hide()
                );
            }
          },
          err => {
            this.spinner.hide();
          },
          () => this.spinner.hide()
        );
    } else {
      this.router.navigate([""]);
    }
  }

  openPage(page: string) {
    this.switchService.updateForm = true;
    this.router.navigate([this.switchType + "/" + page]);
  }
  submitDetails() {
    var requestSteps = {
      stepsId: localStorage.getItem("stepsId"),
      lastStageReached: "Final Step"
    };
    this.switchService.updateSteps(requestSteps).subscribe();

    var supplyAddressArr = this.switchService.step1Obj.supplyAddress.split(" ");
    var position = supplyAddressArr.length / 4;
    var address1 = supplyAddressArr.slice(0, position);
    var address2 = supplyAddressArr.slice(position, position * 2);
    var address3 = supplyAddressArr.slice(position * 2, position * 3);
    var address4 = supplyAddressArr.slice(position * 3, position * 4);

    var contractStartDate = new Date(
      this.switchService.step2Obj.contractEndDate
    );

    contractStartDate.setDate(contractStartDate.getDate() + 1);
    var contractStartDateStr =
      contractStartDate.getUTCFullYear() +
      "-" +
      (contractStartDate.getUTCMonth() + 1) +
      "-" +
      contractStartDate.getUTCDate();

    var contractEndDate = new Date(this.switchService.step3Obj.contractEndDateFromUD);
    var contractEndDateStr =  /* this.switchService.step3Obj.contractEndDateFromUD; */

      contractEndDate.getUTCFullYear() +
      "-" +
      (contractEndDate.getUTCMonth() + 1) +
      "-" +
      contractEndDate.getUTCDate();


    var MainDetailsData = [
      {
        Key: "address 1",
        Value: address1.join(" ")
      },
      {
        Key: "address 2",
        Value: address2.join(" ")
      },
      {
        Key: "address 3",
        Value: address3.join(" ")
      },
      {
        Key: "address 4",
        Value: address4.join(" ")
      },
      {
        Key: "post code",
        Value: this.switchService.step1Obj.postCode
      },
      {
        Key: "billing address1",
        Value: this.switchService.addressObj.billingAddressLine1
          ? this.switchService.addressObj.billingAddressLine1
          : ""
      },
      {
        Key: "billing address2",
        Value: this.switchService.addressObj.billingAddressLine2
          ? this.switchService.addressObj.billingAddressLine2
          : ""
      },
      {
        Key: "billing address3",
        Value:
          (this.switchService.addressObj.billingCity
            ? this.switchService.addressObj.billingCity
            : "") +
          " " +
          (this.switchService.addressObj.billingCountry
            ? this.switchService.addressObj.billingCountry
            : "")
      },
      {
        Key: "billing postcode",
        Value: this.switchService.addressObj.billingPostCode
          ? this.switchService.addressObj.billingPostCode
          : ""
      },
      {
        Key: "bank name",
        Value: this.switchService.paymentObj.checkManual
          ? this.switchService.paymentObj.manualBankName
          : this.switchService.paymentObj.bankName
      },
      {
        Key: "bank account name",
        Value: this.switchService.paymentObj.accountHolderName
      },
      {
        Key: "account number",
        Value: this.switchService.paymentObj.accountNumber
      },
      {
        Key: "sort code",
        Value: this.switchService.paymentObj.sortCode
      },
      {
        Key: "email",
        Value: this.switchService.personalObj.emailAddress
      },
      {
        Key: "mobile",
        Value: this.switchService.personalObj.mobileNo
      },
      {
        Key: "business type",
        Value: this.switchService.personalObj.companyType
      },
      {
        Key: "contact name",
        Value: this.switchService.personalObj.name
      },
      {
        Key: "premises name",
        Value: this.switchService.personalObj.companyName
      },
      {
        Key: "previous address1",
        Value: this.switchService.addressObj.prevAddressLine1
          ? this.switchService.addressObj.prevAddressLine1
          : ""
      },
      {
        Key: "previous address2",
        Value: this.switchService.addressObj.prevAddressLine2
          ? this.switchService.addressObj.prevAddressLine2
          : ""
      },
      {
        Key: "previous address3",
        Value:
          (this.switchService.addressObj.prevCity
            ? this.switchService.addressObj.prevCity
            : "") +
          " " +
          (this.switchService.addressObj.prevCountry
            ? this.switchService.addressObj.prevCountry
            : "")
      },
      {
        Key: "previous postcode",
        Value: this.switchService.addressObj.prevPostCode
          ? this.switchService.addressObj.prevPostCode
          : ""
      },
      {
        Key: "company number",
        Value: this.switchService.personalObj.companyRegNo
      },
      {
        Key: "payment method",
        Value: this.switchService.step2Obj.billingType
      }
    ];
    var ItsAGasContract = false;
    if (this.switchType == "electricity") {
      ItsAGasContract = false;
      MainDetailsData.push({
        Key: "current electric supplier 1",
        Value: this.switchService.step2Obj.checkManual
          ? this.switchService.step2Obj.manualCurrentSupplier
          : this.switchService.step2Obj.currentSupplier
      });
      MainDetailsData.push({
        Key: "mpan top line 1",
        Value: this.switchService.step1Obj.MPANTopLineNo
      });
      MainDetailsData.push({
        Key: "mpan bottom line 1",
        Value: this.switchService.step1Obj.MPANBottomLineNo
      });
      MainDetailsData.push({
        Key: "new supplier electricity",
        Value: this.switchService.step3Obj.supplier.Supplier
      });
      MainDetailsData.push({
        Key: "elec new contract length",
        Value: this.switchService.step3Obj.supplier.Term * 12
      });
      MainDetailsData.push({
        Key: "elec new contract end date",
        Value: contractEndDateStr
      });
      MainDetailsData.push({
        Key: "elec contract end date",
        Value: contractEndDateStr
      });
      MainDetailsData.push({
        Key: "elec new contract date",
        Value: contractStartDateStr
      });
      MainDetailsData.push({
        Key: "electric smart meter",
        Value: this.switchService.step2Obj.smartMeter == true ? 1 : 0
      });

    } else {
      ItsAGasContract = true;
      MainDetailsData.push({
        Key: "current gas supplier 1",
        Value: this.switchService.step2Obj.currentSupplier
          ? this.switchService.step2Obj.currentSupplier
          : this.switchService.step2Obj.manualCurrentSupplier
      });
      MainDetailsData.push({
        Key: "mpr 1",
        Value: this.switchService.step1Obj.MPRNNo
      });
      MainDetailsData.push({
        Key: "new supplier gas",
        Value: this.switchService.step3Obj.supplier.Supplier
      });
      MainDetailsData.push({
        Key: "gas new contract length",
        Value: this.switchService.step3Obj.supplier.Term * 12
      });
      MainDetailsData.push({
        Key: "gas new contract end date",
        Value: contractEndDateStr
      });
      MainDetailsData.push({
        Key: "gas smart meter",
        Value: this.switchService.step2Obj.smartMeter == true ? 1 : 0
      });
    }

    var UsageRatesData = [
      {
        Key: "daycharge",
        Value: this.switchService.step3Obj.supplier.DayUnitrate
      },
      {
        Key: "nightcharge",
        Value: this.switchService.step3Obj.supplier.NightUnitrate
      },
      {
        Key: "eveandwendcharge",
        Value: "0"
      },
      {
        Key: "standing charge",
        Value: this.switchService.step3Obj.supplier.StandingCharge
      },
      {
        Key: "dayusage",
        Value: this.switchService.step3Obj.dayConsumption
      },
      {
        Key: "nightusage",
        Value: this.switchService.step3Obj.nightConsumption
      },
      {
        Key: "eveandwendusage",
        Value: "0"
      },
    ];

    var TemplateOptions = [
      {
        PlanType: this.switchService.step3Obj.supplier.PlanType,
        HalfHourly: this.switchService.step3Obj.supplier.HalfHourly ? this.switchService.step3Obj.supplier.HalfHourly : false
      }
    ];

    var MeterDetailsData = [
      {
        Key: "sc",
        Value: this.switchService.step3Obj.supplier.SC
      },
      {
        Key: "period",
        Value: this.switchService.step3Obj.supplier.Period
      },
      {
        Key: "fits",
        Value: this.switchService.step3Obj.supplier.Fits
      }
    ];

    delete this.switchService.step1Obj.addresses;
    delete this.switchService.step3Obj.prices;

    var quotationDetails = {
      step1Obj: this.switchService.step1Obj,
      step2Obj: this.switchService.step2Obj,
      step3Obj: this.switchService.step3Obj,
      personalObj: this.switchService.personalObj,
      // addressObj: this.switchService.addressObj,
      // paymentObj: this.switchService.paymentObj,
      currentUrl: this.switchService.currentUrl,
      userId: localStorage.getItem("userId")
    };

    var request = {
      ItsAGasContract: ItsAGasContract,
      MainDetailsData: MainDetailsData,
      UsageRatesData: UsageRatesData,
      TemplateOptions: TemplateOptions,
      MeterDetailsData: MeterDetailsData,
      quotationDetails: quotationDetails
    };
    console.log(JSON.stringify(request));
    this.switchService.sendDocuSign(request).subscribe(
      (data: any) => {
        this.spinner.hide();
        console.log(data);
        if (data.code == 200) {
          localStorage.removeItem("stepsId");
          this.router.navigate(["thankyou"]);
        } else {
          Swal(data.message);
        }
      },
      err => this.spinner.hide(),
      () => this.spinner.hide()
    );
  }
}
