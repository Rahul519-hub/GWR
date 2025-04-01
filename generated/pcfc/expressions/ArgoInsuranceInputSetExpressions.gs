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
    
    // 'action' attribute on TextInput (id=Addname_Input) at ArgoInsuranceInputSet.pcf: line 38, column 53
    function action_20 () : void {
      Argo_PPupPopup.push(PolicyPeriod.Argo_Insurance)
    }
    
    // 'action' attribute on TextInput (id=Addname_Input) at ArgoInsuranceInputSet.pcf: line 38, column 53
    function action_dest_21 () : pcf.api.Destination {
      return pcf.Argo_PPupPopup.createDestination(PolicyPeriod.Argo_Insurance)
    }
    
    // 'value' attribute on TypeKeyInput (id=PhoneCountryCode_Input) at ArgoInsuranceInputSet.pcf: line 126, column 45
    function defaultSetter_101 (__VALUE_TO_SET :  java.lang.Object) : void {
      PolicyPeriod.Argo_Insurance.PhoneCountryCode = (__VALUE_TO_SET as typekey.PhoneCountryCode)
    }
    
    // 'value' attribute on TextInput (id=FullName_Input) at ArgoInsuranceInputSet.pcf: line 26, column 52
    function defaultSetter_13 (__VALUE_TO_SET :  java.lang.Object) : void {
      PolicyPeriod.Argo_Insurance.FullName = (__VALUE_TO_SET as java.lang.String)
    }
    
    // 'value' attribute on TextInput (id=FirstName_Input) at ArgoInsuranceInputSet.pcf: line 14, column 53
    function defaultSetter_2 (__VALUE_TO_SET :  java.lang.Object) : void {
      PolicyPeriod.Argo_Insurance.Firstname = (__VALUE_TO_SET as java.lang.String)
    }
    
    // 'value' attribute on TextInput (id=Age_Input) at ArgoInsuranceInputSet.pcf: line 44, column 37
    function defaultSetter_28 (__VALUE_TO_SET :  java.lang.Object) : void {
      PolicyPeriod.Argo_Insurance.Age = (__VALUE_TO_SET as java.lang.Integer)
    }
    
    // 'value' attribute on DateInput (id=DOB_Input) at ArgoInsuranceInputSet.pcf: line 52, column 48
    function defaultSetter_33 (__VALUE_TO_SET :  java.lang.Object) : void {
      PolicyPeriod.Argo_Insurance.DOB = (__VALUE_TO_SET as java.util.Date)
    }
    
    // 'value' attribute on TypeKeyInput (id=Gender_Input) at ArgoInsuranceInputSet.pcf: line 58, column 38
    function defaultSetter_39 (__VALUE_TO_SET :  java.lang.Object) : void {
      PolicyPeriod.Argo_Insurance.Gender = (__VALUE_TO_SET as typekey.GenderType)
    }
    
    // 'value' attribute on TextInput (id=phone_Input) at ArgoInsuranceInputSet.pcf: line 65, column 50
    function defaultSetter_45 (__VALUE_TO_SET :  java.lang.Object) : void {
      PolicyPeriod.Argo_Insurance.Phone = (__VALUE_TO_SET as java.lang.String)
    }
    
    // 'value' attribute on TextInput (id=SSN_Input) at ArgoInsuranceInputSet.pcf: line 70, column 48
    function defaultSetter_51 (__VALUE_TO_SET :  java.lang.Object) : void {
      PolicyPeriod.Argo_Insurance.SSN = (__VALUE_TO_SET as java.lang.String)
    }
    
    // 'value' attribute on TextInput (id=PolicyNumber_Input) at ArgoInsuranceInputSet.pcf: line 75, column 57
    function defaultSetter_57 (__VALUE_TO_SET :  java.lang.Object) : void {
      PolicyPeriod.Argo_Insurance.PolicyNumber = (__VALUE_TO_SET as java.lang.String)
    }
    
    // 'value' attribute on DateInput (id=LicenseNumber_Input) at ArgoInsuranceInputSet.pcf: line 80, column 56
    function defaultSetter_63 (__VALUE_TO_SET :  java.lang.Object) : void {
      PolicyPeriod.Argo_Insurance.LicenseDate = (__VALUE_TO_SET as java.util.Date)
    }
    
    // 'value' attribute on TypeKeyInput (id=ROLE_Input) at ArgoInsuranceInputSet.pcf: line 86, column 38
    function defaultSetter_69 (__VALUE_TO_SET :  java.lang.Object) : void {
      PolicyPeriod.Argo_Insurance.Argo_Occup = (__VALUE_TO_SET as typekey.Argo_Occup)
    }
    
    // 'value' attribute on TypeKeyInput (id=JOB_Input) at ArgoInsuranceInputSet.pcf: line 92, column 39
    function defaultSetter_75 (__VALUE_TO_SET :  java.lang.Object) : void {
      PolicyPeriod.Argo_Insurance.Argo_Desig = (__VALUE_TO_SET as typekey.Argo_Desig)
    }
    
    // 'value' attribute on TextInput (id=LastName_Input) at ArgoInsuranceInputSet.pcf: line 21, column 53
    function defaultSetter_8 (__VALUE_TO_SET :  java.lang.Object) : void {
      PolicyPeriod.Argo_Insurance.LastName = (__VALUE_TO_SET as java.lang.String)
    }
    
    // 'value' attribute on BooleanRadioInput (id=AssignedRisk_Input) at ArgoInsuranceInputSet.pcf: line 101, column 41
    function defaultSetter_81 (__VALUE_TO_SET :  java.lang.Object) : void {
      PolicyPeriod.AssignedRisk = (__VALUE_TO_SET as java.lang.Boolean)
    }
    
    // 'value' attribute on TextInput (id=PassportNumber_Input) at ArgoInsuranceInputSet.pcf: line 110, column 52
    function defaultSetter_88 (__VALUE_TO_SET :  java.lang.Object) : void {
      PolicyPeriod.Argo_Insurance.Passportnumber = (__VALUE_TO_SET as java.lang.String)
    }
    
    // 'value' attribute on TypeKeyInput (id=Country_Input) at ArgoInsuranceInputSet.pcf: line 120, column 36
    function defaultSetter_95 (__VALUE_TO_SET :  java.lang.Object) : void {
      PolicyPeriod.Argo_Insurance.Country = (__VALUE_TO_SET as typekey.Country)
    }
    
    // 'editable' attribute on TextInput (id=FirstName_Input) at ArgoInsuranceInputSet.pcf: line 14, column 53
    function editable_0 () : java.lang.Boolean {
      return true 
    }
    
    // 'editable' attribute on TextInput (id=Addname_Input) at ArgoInsuranceInputSet.pcf: line 38, column 53
    function editable_19 () : java.lang.Boolean {
      return false 
    }
    
    // 'value' attribute on TextInput (id=FirstName_Input) at ArgoInsuranceInputSet.pcf: line 14, column 53
    function valueRoot_3 () : java.lang.Object {
      return PolicyPeriod.Argo_Insurance
    }
    
    // 'value' attribute on BooleanRadioInput (id=AssignedRisk_Input) at ArgoInsuranceInputSet.pcf: line 101, column 41
    function valueRoot_82 () : java.lang.Object {
      return PolicyPeriod
    }
    
    // 'value' attribute on TextInput (id=FirstName_Input) at ArgoInsuranceInputSet.pcf: line 14, column 53
    function value_1 () : java.lang.String {
      return PolicyPeriod.Argo_Insurance.Firstname
    }
    
    // 'value' attribute on TypeKeyInput (id=PhoneCountryCode_Input) at ArgoInsuranceInputSet.pcf: line 126, column 45
    function value_100 () : typekey.PhoneCountryCode {
      return PolicyPeriod.Argo_Insurance.PhoneCountryCode
    }
    
    // 'value' attribute on TextInput (id=FullName_Input) at ArgoInsuranceInputSet.pcf: line 26, column 52
    function value_12 () : java.lang.String {
      return PolicyPeriod.Argo_Insurance.FullName
    }
    
    // 'value' attribute on TextInput (id=Name_Input) at ArgoInsuranceInputSet.pcf: line 30, column 55
    function value_16 () : java.lang.String {
      return PolicyPeriod.Argo_Insurance.DisplayName
    }
    
    // 'value' attribute on TextInput (id=Age_Input) at ArgoInsuranceInputSet.pcf: line 44, column 37
    function value_27 () : java.lang.Integer {
      return PolicyPeriod.Argo_Insurance.Age
    }
    
    // 'value' attribute on DateInput (id=DOB_Input) at ArgoInsuranceInputSet.pcf: line 52, column 48
    function value_32 () : java.util.Date {
      return PolicyPeriod.Argo_Insurance.DOB
    }
    
    // 'value' attribute on TypeKeyInput (id=Gender_Input) at ArgoInsuranceInputSet.pcf: line 58, column 38
    function value_38 () : typekey.GenderType {
      return PolicyPeriod.Argo_Insurance.Gender
    }
    
    // 'value' attribute on TextInput (id=phone_Input) at ArgoInsuranceInputSet.pcf: line 65, column 50
    function value_44 () : java.lang.String {
      return PolicyPeriod.Argo_Insurance.Phone
    }
    
    // 'value' attribute on TextInput (id=SSN_Input) at ArgoInsuranceInputSet.pcf: line 70, column 48
    function value_50 () : java.lang.String {
      return PolicyPeriod.Argo_Insurance.SSN
    }
    
    // 'value' attribute on TextInput (id=PolicyNumber_Input) at ArgoInsuranceInputSet.pcf: line 75, column 57
    function value_56 () : java.lang.String {
      return PolicyPeriod.Argo_Insurance.PolicyNumber
    }
    
    // 'value' attribute on DateInput (id=LicenseNumber_Input) at ArgoInsuranceInputSet.pcf: line 80, column 56
    function value_62 () : java.util.Date {
      return PolicyPeriod.Argo_Insurance.LicenseDate
    }
    
    // 'value' attribute on TypeKeyInput (id=ROLE_Input) at ArgoInsuranceInputSet.pcf: line 86, column 38
    function value_68 () : typekey.Argo_Occup {
      return PolicyPeriod.Argo_Insurance.Argo_Occup
    }
    
    // 'value' attribute on TextInput (id=LastName_Input) at ArgoInsuranceInputSet.pcf: line 21, column 53
    function value_7 () : java.lang.String {
      return PolicyPeriod.Argo_Insurance.LastName
    }
    
    // 'value' attribute on TypeKeyInput (id=JOB_Input) at ArgoInsuranceInputSet.pcf: line 92, column 39
    function value_74 () : typekey.Argo_Desig {
      return PolicyPeriod.Argo_Insurance.Argo_Desig
    }
    
    // 'value' attribute on BooleanRadioInput (id=AssignedRisk_Input) at ArgoInsuranceInputSet.pcf: line 101, column 41
    function value_80 () : java.lang.Boolean {
      return PolicyPeriod.AssignedRisk
    }
    
    // 'value' attribute on TextInput (id=PassportNumber_Input) at ArgoInsuranceInputSet.pcf: line 110, column 52
    function value_87 () : java.lang.String {
      return PolicyPeriod.Argo_Insurance.Passportnumber
    }
    
    // 'value' attribute on TypeKeyInput (id=Country_Input) at ArgoInsuranceInputSet.pcf: line 120, column 36
    function value_94 () : typekey.Country {
      return PolicyPeriod.Argo_Insurance.Country
    }
    
    // 'visible' attribute on TextInput (id=PassportNumber_Input) at ArgoInsuranceInputSet.pcf: line 110, column 52
    function visible_86 () : java.lang.Boolean {
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