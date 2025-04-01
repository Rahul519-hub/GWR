package pcfc.expressions

uses pcf.*
uses entity.*
uses typekey.*
uses gw.api.locale.DisplayKey
@javax.annotation.Generated("config/web/pcf/Argo_Insurance/ArgoInsuranceInputSet.pcf", "", "com.guidewire.pcfgen.PCFClassGenerator")
class ArgoInsuranceInputSetExpressions {
  @javax.annotation.Generated("config/web/pcf/Argo_Insurance/ArgoInsuranceInputSet.pcf", "", "com.guidewire.pcfgen.PCFClassGenerator")
  public static class ArgoInsuranceInputSetExpressionsImpl extends gw.api.web.ScopeBaseClass {
    public construct(widget :  Object) {
      super(widget, 0)
    }
    
    protected construct(widget :  Object, scopeDepth :  int) {
      super(widget, scopeDepth)
    }
    
    // 'value' attribute on TextInput (id=FullName_Input) at ArgoInsuranceInputSet.pcf: line 26, column 52
    function defaultSetter_13 (__VALUE_TO_SET :  java.lang.Object) : void {
      PolicyPeriod.Argo_Insurance.FullName = (__VALUE_TO_SET as java.lang.String)
    }
    
    // 'value' attribute on TextInput (id=FirstName_Input) at ArgoInsuranceInputSet.pcf: line 14, column 53
    function defaultSetter_2 (__VALUE_TO_SET :  java.lang.Object) : void {
      PolicyPeriod.Argo_Insurance.Firstname = (__VALUE_TO_SET as java.lang.String)
    }
    
    // 'value' attribute on DateInput (id=DOB_Input) at ArgoInsuranceInputSet.pcf: line 39, column 48
    function defaultSetter_21 (__VALUE_TO_SET :  java.lang.Object) : void {
      PolicyPeriod.Argo_Insurance.DOB = (__VALUE_TO_SET as java.util.Date)
    }
    
    // 'value' attribute on TextInput (id=Age_Input) at ArgoInsuranceInputSet.pcf: line 45, column 37
    function defaultSetter_26 (__VALUE_TO_SET :  java.lang.Object) : void {
      PolicyPeriod.Argo_Insurance.Age = (__VALUE_TO_SET as java.lang.Integer)
    }
    
    // 'value' attribute on TypeKeyInput (id=Gender_Input) at ArgoInsuranceInputSet.pcf: line 53, column 38
    function defaultSetter_31 (__VALUE_TO_SET :  java.lang.Object) : void {
      PolicyPeriod.Argo_Insurance.Gender = (__VALUE_TO_SET as typekey.GenderType)
    }
    
    // 'value' attribute on TextInput (id=phone_Input) at ArgoInsuranceInputSet.pcf: line 60, column 50
    function defaultSetter_37 (__VALUE_TO_SET :  java.lang.Object) : void {
      PolicyPeriod.Argo_Insurance.Phone = (__VALUE_TO_SET as java.lang.String)
    }
    
    // 'value' attribute on TextInput (id=SSN_Input) at ArgoInsuranceInputSet.pcf: line 65, column 48
    function defaultSetter_43 (__VALUE_TO_SET :  java.lang.Object) : void {
      PolicyPeriod.Argo_Insurance.SSN = (__VALUE_TO_SET as java.lang.String)
    }
    
    // 'value' attribute on TextInput (id=PolicyNumber_Input) at ArgoInsuranceInputSet.pcf: line 70, column 57
    function defaultSetter_49 (__VALUE_TO_SET :  java.lang.Object) : void {
      PolicyPeriod.Argo_Insurance.PolicyNumber = (__VALUE_TO_SET as java.lang.String)
    }
    
    // 'value' attribute on DateInput (id=LicenseNumber_Input) at ArgoInsuranceInputSet.pcf: line 75, column 56
    function defaultSetter_55 (__VALUE_TO_SET :  java.lang.Object) : void {
      PolicyPeriod.Argo_Insurance.LicenseDate = (__VALUE_TO_SET as java.util.Date)
    }
    
    // 'value' attribute on TypeKeyInput (id=ROLE_Input) at ArgoInsuranceInputSet.pcf: line 81, column 38
    function defaultSetter_61 (__VALUE_TO_SET :  java.lang.Object) : void {
      PolicyPeriod.Argo_Insurance.Argo_Occup = (__VALUE_TO_SET as typekey.Argo_Occup)
    }
    
    // 'value' attribute on TypeKeyInput (id=JOB_Input) at ArgoInsuranceInputSet.pcf: line 87, column 39
    function defaultSetter_67 (__VALUE_TO_SET :  java.lang.Object) : void {
      PolicyPeriod.Argo_Insurance.Argo_Desig = (__VALUE_TO_SET as typekey.Argo_Desig)
    }
    
    // 'value' attribute on BooleanRadioInput (id=AssignedRisk_Input) at ArgoInsuranceInputSet.pcf: line 96, column 41
    function defaultSetter_73 (__VALUE_TO_SET :  java.lang.Object) : void {
      PolicyPeriod.AssignedRisk = (__VALUE_TO_SET as java.lang.Boolean)
    }
    
    // 'value' attribute on TextInput (id=LastName_Input) at ArgoInsuranceInputSet.pcf: line 21, column 53
    function defaultSetter_8 (__VALUE_TO_SET :  java.lang.Object) : void {
      PolicyPeriod.Argo_Insurance.LastName = (__VALUE_TO_SET as java.lang.String)
    }
    
    // 'value' attribute on TextInput (id=PassportNumber_Input) at ArgoInsuranceInputSet.pcf: line 105, column 52
    function defaultSetter_80 (__VALUE_TO_SET :  java.lang.Object) : void {
      PolicyPeriod.Argo_Insurance.Passportnumber = (__VALUE_TO_SET as java.lang.String)
    }
    
    // 'value' attribute on TypeKeyInput (id=Country_Input) at ArgoInsuranceInputSet.pcf: line 115, column 36
    function defaultSetter_87 (__VALUE_TO_SET :  java.lang.Object) : void {
      PolicyPeriod.Argo_Insurance.Country = (__VALUE_TO_SET as typekey.Country)
    }
    
    // 'value' attribute on TypeKeyInput (id=PhoneCountryCode_Input) at ArgoInsuranceInputSet.pcf: line 121, column 45
    function defaultSetter_93 (__VALUE_TO_SET :  java.lang.Object) : void {
      PolicyPeriod.Argo_Insurance.PhoneCountryCode = (__VALUE_TO_SET as typekey.PhoneCountryCode)
    }
    
    // 'editable' attribute on TextInput (id=FirstName_Input) at ArgoInsuranceInputSet.pcf: line 14, column 53
    function editable_0 () : java.lang.Boolean {
      return true 
    }
    
    // 'value' attribute on TextInput (id=FirstName_Input) at ArgoInsuranceInputSet.pcf: line 14, column 53
    function valueRoot_3 () : java.lang.Object {
      return PolicyPeriod.Argo_Insurance
    }
    
    // 'value' attribute on BooleanRadioInput (id=AssignedRisk_Input) at ArgoInsuranceInputSet.pcf: line 96, column 41
    function valueRoot_74 () : java.lang.Object {
      return PolicyPeriod
    }
    
    // 'value' attribute on TextInput (id=FirstName_Input) at ArgoInsuranceInputSet.pcf: line 14, column 53
    function value_1 () : java.lang.String {
      return PolicyPeriod.Argo_Insurance.Firstname
    }
    
    // 'value' attribute on TextInput (id=FullName_Input) at ArgoInsuranceInputSet.pcf: line 26, column 52
    function value_12 () : java.lang.String {
      return PolicyPeriod.Argo_Insurance.FullName
    }
    
    // 'value' attribute on TextInput (id=Name_Input) at ArgoInsuranceInputSet.pcf: line 30, column 55
    function value_16 () : java.lang.String {
      return PolicyPeriod.Argo_Insurance.DisplayName
    }
    
    // 'value' attribute on DateInput (id=DOB_Input) at ArgoInsuranceInputSet.pcf: line 39, column 48
    function value_20 () : java.util.Date {
      return PolicyPeriod.Argo_Insurance.DOB
    }
    
    // 'value' attribute on TextInput (id=Age_Input) at ArgoInsuranceInputSet.pcf: line 45, column 37
    function value_25 () : java.lang.Integer {
      return PolicyPeriod.Argo_Insurance.Age
    }
    
    // 'value' attribute on TypeKeyInput (id=Gender_Input) at ArgoInsuranceInputSet.pcf: line 53, column 38
    function value_30 () : typekey.GenderType {
      return PolicyPeriod.Argo_Insurance.Gender
    }
    
    // 'value' attribute on TextInput (id=phone_Input) at ArgoInsuranceInputSet.pcf: line 60, column 50
    function value_36 () : java.lang.String {
      return PolicyPeriod.Argo_Insurance.Phone
    }
    
    // 'value' attribute on TextInput (id=SSN_Input) at ArgoInsuranceInputSet.pcf: line 65, column 48
    function value_42 () : java.lang.String {
      return PolicyPeriod.Argo_Insurance.SSN
    }
    
    // 'value' attribute on TextInput (id=PolicyNumber_Input) at ArgoInsuranceInputSet.pcf: line 70, column 57
    function value_48 () : java.lang.String {
      return PolicyPeriod.Argo_Insurance.PolicyNumber
    }
    
    // 'value' attribute on DateInput (id=LicenseNumber_Input) at ArgoInsuranceInputSet.pcf: line 75, column 56
    function value_54 () : java.util.Date {
      return PolicyPeriod.Argo_Insurance.LicenseDate
    }
    
    // 'value' attribute on TypeKeyInput (id=ROLE_Input) at ArgoInsuranceInputSet.pcf: line 81, column 38
    function value_60 () : typekey.Argo_Occup {
      return PolicyPeriod.Argo_Insurance.Argo_Occup
    }
    
    // 'value' attribute on TypeKeyInput (id=JOB_Input) at ArgoInsuranceInputSet.pcf: line 87, column 39
    function value_66 () : typekey.Argo_Desig {
      return PolicyPeriod.Argo_Insurance.Argo_Desig
    }
    
    // 'value' attribute on TextInput (id=LastName_Input) at ArgoInsuranceInputSet.pcf: line 21, column 53
    function value_7 () : java.lang.String {
      return PolicyPeriod.Argo_Insurance.LastName
    }
    
    // 'value' attribute on BooleanRadioInput (id=AssignedRisk_Input) at ArgoInsuranceInputSet.pcf: line 96, column 41
    function value_72 () : java.lang.Boolean {
      return PolicyPeriod.AssignedRisk
    }
    
    // 'value' attribute on TextInput (id=PassportNumber_Input) at ArgoInsuranceInputSet.pcf: line 105, column 52
    function value_79 () : java.lang.String {
      return PolicyPeriod.Argo_Insurance.Passportnumber
    }
    
    // 'value' attribute on TypeKeyInput (id=Country_Input) at ArgoInsuranceInputSet.pcf: line 115, column 36
    function value_86 () : typekey.Country {
      return PolicyPeriod.Argo_Insurance.Country
    }
    
    // 'value' attribute on TypeKeyInput (id=PhoneCountryCode_Input) at ArgoInsuranceInputSet.pcf: line 121, column 45
    function value_92 () : typekey.PhoneCountryCode {
      return PolicyPeriod.Argo_Insurance.PhoneCountryCode
    }
    
    // 'visible' attribute on TextInput (id=PassportNumber_Input) at ArgoInsuranceInputSet.pcf: line 105, column 52
    function visible_78 () : java.lang.Boolean {
      return PolicyPeriod.AssignedRisk == true 
    }
    
    property get PolicyPeriod () : PolicyPeriod {
      return getRequireValue("PolicyPeriod", 0) as PolicyPeriod
    }
    
    property set PolicyPeriod ($arg :  PolicyPeriod) {
      setRequireValue("PolicyPeriod", 0, $arg)
    }
    
    
  }
  
  
}