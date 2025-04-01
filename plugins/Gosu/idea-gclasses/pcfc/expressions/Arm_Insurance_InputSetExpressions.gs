package pcfc.expressions

uses pcf.*
uses entity.*
uses typekey.*
uses gw.api.locale.DisplayKey
@javax.annotation.Generated("config/web/pcf/ARM_Insurance/Arm_Insurance_InputSet.pcf", "", "com.guidewire.pcfgen.PCFClassGenerator")
class Arm_Insurance_InputSetExpressions {
  @javax.annotation.Generated("config/web/pcf/ARM_Insurance/Arm_Insurance_InputSet.pcf", "", "com.guidewire.pcfgen.PCFClassGenerator")
  public static class Arm_Insurance_InputSetExpressionsImpl extends gw.api.web.ScopeBaseClass {
    public construct(widget :  Object) {
      super(widget, 0)
    }
    
    protected construct(widget :  Object, scopeDepth :  int) {
      super(widget, scopeDepth)
    }
    
    // 'action' attribute on TextInput (id=FullName_Input) at Arm_Insurance_InputSet.pcf: line 24, column 34
    function action_12 () : void {
      Arm_InsurancePopup.push(PolicyPeriod.Arm_Insurance)
    }
    
    // 'action' attribute on TextInput (id=FullName_Input) at Arm_Insurance_InputSet.pcf: line 24, column 34
    function action_dest_13 () : pcf.api.Destination {
      return pcf.Arm_InsurancePopup.createDestination(PolicyPeriod.Arm_Insurance)
    }
    
    // 'value' attribute on DateInput (id=DOB_Input) at Arm_Insurance_InputSet.pcf: line 29, column 47
    function defaultSetter_16 (__VALUE_TO_SET :  java.lang.Object) : void {
      PolicyPeriod.Arm_Insurance.DOB = (__VALUE_TO_SET as java.util.Date)
    }
    
    // 'value' attribute on TextInput (id=FirstName_Input) at Arm_Insurance_InputSet.pcf: line 14, column 53
    function defaultSetter_2 (__VALUE_TO_SET :  java.lang.Object) : void {
      PolicyPeriod.Arm_Insurance.FirstName = (__VALUE_TO_SET as java.lang.String)
    }
    
    // 'value' attribute on TextInput (id=Age_Input) at Arm_Insurance_InputSet.pcf: line 35, column 38
    function defaultSetter_22 (__VALUE_TO_SET :  java.lang.Object) : void {
      PolicyPeriod.Arm_Insurance.Age = (__VALUE_TO_SET as java.lang.Integer)
    }
    
    // 'value' attribute on TypeKeyInput (id=Gender_Input) at Arm_Insurance_InputSet.pcf: line 41, column 39
    function defaultSetter_28 (__VALUE_TO_SET :  java.lang.Object) : void {
      PolicyPeriod.Arm_Insurance.Gender = (__VALUE_TO_SET as typekey.GenderType)
    }
    
    // 'value' attribute on TypeKeyInput (id=Country_Input) at Arm_Insurance_InputSet.pcf: line 47, column 36
    function defaultSetter_34 (__VALUE_TO_SET :  java.lang.Object) : void {
      PolicyPeriod.Arm_Insurance.Country = (__VALUE_TO_SET as typekey.Country)
    }
    
    // 'value' attribute on TypeKeyInput (id=Phone_Input) at Arm_Insurance_InputSet.pcf: line 53, column 45
    function defaultSetter_40 (__VALUE_TO_SET :  java.lang.Object) : void {
      PolicyPeriod.Arm_Insurance.Phone = (__VALUE_TO_SET as typekey.PhoneCountryCode)
    }
    
    // 'value' attribute on TextInput (id=SSN_Input) at Arm_Insurance_InputSet.pcf: line 58, column 47
    function defaultSetter_46 (__VALUE_TO_SET :  java.lang.Object) : void {
      PolicyPeriod.Arm_Insurance.SSN = (__VALUE_TO_SET as java.lang.String)
    }
    
    // 'value' attribute on TextInput (id=UserName_Input) at Arm_Insurance_InputSet.pcf: line 63, column 52
    function defaultSetter_52 (__VALUE_TO_SET :  java.lang.Object) : void {
      PolicyPeriod.Arm_Insurance.UserName = (__VALUE_TO_SET as java.lang.String)
    }
    
    // 'value' attribute on BooleanRadioInput (id=UserValue_Input) at Arm_Insurance_InputSet.pcf: line 70, column 41
    function defaultSetter_57 (__VALUE_TO_SET :  java.lang.Object) : void {
      PolicyPeriod.AssignedRisk = (__VALUE_TO_SET as java.lang.Boolean)
    }
    
    // 'value' attribute on TextInput (id=AssignedRisk_Input) at Arm_Insurance_InputSet.pcf: line 78, column 52
    function defaultSetter_63 (__VALUE_TO_SET :  java.lang.Object) : void {
      PolicyPeriod.Arm_Insurance.UserValue = (__VALUE_TO_SET as java.lang.String)
    }
    
    // 'value' attribute on TextInput (id=PassPortNumber_Input) at Arm_Insurance_InputSet.pcf: line 84, column 58
    function defaultSetter_70 (__VALUE_TO_SET :  java.lang.Object) : void {
      PolicyPeriod.Arm_Insurance.PassPortNumber = (__VALUE_TO_SET as java.lang.String)
    }
    
    // 'value' attribute on TextInput (id=Email_Input) at Arm_Insurance_InputSet.pcf: line 89, column 49
    function defaultSetter_76 (__VALUE_TO_SET :  java.lang.Object) : void {
      PolicyPeriod.Arm_Insurance.Email = (__VALUE_TO_SET as java.lang.String)
    }
    
    // 'value' attribute on TextInput (id=LastName_Input) at Arm_Insurance_InputSet.pcf: line 19, column 52
    function defaultSetter_8 (__VALUE_TO_SET :  java.lang.Object) : void {
      PolicyPeriod.Arm_Insurance.LastName = (__VALUE_TO_SET as java.lang.String)
    }
    
    // 'value' attribute on TypeKeyInput (id=CarName_Input) at Arm_Insurance_InputSet.pcf: line 95, column 50
    function defaultSetter_82 (__VALUE_TO_SET :  java.lang.Object) : void {
      PolicyPeriod.Arm_Insurance.CarName = (__VALUE_TO_SET as typekey.Arm_Insurance_Carname)
    }
    
    // 'value' attribute on TypeKeyInput (id=CarModel_Input) at Arm_Insurance_InputSet.pcf: line 101, column 51
    function defaultSetter_88 (__VALUE_TO_SET :  java.lang.Object) : void {
      PolicyPeriod.Arm_Insurance.CarModel = (__VALUE_TO_SET as typekey.Arm_InsuranceCar_Model)
    }
    
    // 'editable' attribute on TextInput (id=FirstName_Input) at Arm_Insurance_InputSet.pcf: line 14, column 53
    function editable_0 () : java.lang.Boolean {
      return true 
    }
    
    // 'editable' attribute on TextInput (id=PassPortNumber_Input) at Arm_Insurance_InputSet.pcf: line 84, column 58
    function editable_68 () : java.lang.Boolean {
      return false 
    }
    
    // 'value' attribute on TextInput (id=FirstName_Input) at Arm_Insurance_InputSet.pcf: line 14, column 53
    function valueRoot_3 () : java.lang.Object {
      return PolicyPeriod.Arm_Insurance
    }
    
    // 'value' attribute on BooleanRadioInput (id=UserValue_Input) at Arm_Insurance_InputSet.pcf: line 70, column 41
    function valueRoot_58 () : java.lang.Object {
      return PolicyPeriod
    }
    
    // 'value' attribute on TextInput (id=FirstName_Input) at Arm_Insurance_InputSet.pcf: line 14, column 53
    function value_1 () : java.lang.String {
      return PolicyPeriod.Arm_Insurance.FirstName
    }
    
    // 'value' attribute on DateInput (id=DOB_Input) at Arm_Insurance_InputSet.pcf: line 29, column 47
    function value_15 () : java.util.Date {
      return PolicyPeriod.Arm_Insurance.DOB
    }
    
    // 'value' attribute on TextInput (id=Age_Input) at Arm_Insurance_InputSet.pcf: line 35, column 38
    function value_21 () : java.lang.Integer {
      return PolicyPeriod.Arm_Insurance.Age
    }
    
    // 'value' attribute on TypeKeyInput (id=Gender_Input) at Arm_Insurance_InputSet.pcf: line 41, column 39
    function value_27 () : typekey.GenderType {
      return PolicyPeriod.Arm_Insurance.Gender
    }
    
    // 'value' attribute on TypeKeyInput (id=Country_Input) at Arm_Insurance_InputSet.pcf: line 47, column 36
    function value_33 () : typekey.Country {
      return PolicyPeriod.Arm_Insurance.Country
    }
    
    // 'value' attribute on TypeKeyInput (id=Phone_Input) at Arm_Insurance_InputSet.pcf: line 53, column 45
    function value_39 () : typekey.PhoneCountryCode {
      return PolicyPeriod.Arm_Insurance.Phone
    }
    
    // 'value' attribute on TextInput (id=SSN_Input) at Arm_Insurance_InputSet.pcf: line 58, column 47
    function value_45 () : java.lang.String {
      return PolicyPeriod.Arm_Insurance.SSN
    }
    
    // 'value' attribute on TextInput (id=UserName_Input) at Arm_Insurance_InputSet.pcf: line 63, column 52
    function value_51 () : java.lang.String {
      return PolicyPeriod.Arm_Insurance.UserName
    }
    
    // 'value' attribute on BooleanRadioInput (id=UserValue_Input) at Arm_Insurance_InputSet.pcf: line 70, column 41
    function value_56 () : java.lang.Boolean {
      return PolicyPeriod.AssignedRisk
    }
    
    // 'value' attribute on TextInput (id=AssignedRisk_Input) at Arm_Insurance_InputSet.pcf: line 78, column 52
    function value_62 () : java.lang.String {
      return PolicyPeriod.Arm_Insurance.UserValue
    }
    
    // 'value' attribute on TextInput (id=PassPortNumber_Input) at Arm_Insurance_InputSet.pcf: line 84, column 58
    function value_69 () : java.lang.String {
      return PolicyPeriod.Arm_Insurance.PassPortNumber
    }
    
    // 'value' attribute on TextInput (id=LastName_Input) at Arm_Insurance_InputSet.pcf: line 19, column 52
    function value_7 () : java.lang.String {
      return PolicyPeriod.Arm_Insurance.LastName
    }
    
    // 'value' attribute on TextInput (id=Email_Input) at Arm_Insurance_InputSet.pcf: line 89, column 49
    function value_75 () : java.lang.String {
      return PolicyPeriod.Arm_Insurance.Email
    }
    
    // 'value' attribute on TypeKeyInput (id=CarName_Input) at Arm_Insurance_InputSet.pcf: line 95, column 50
    function value_81 () : typekey.Arm_Insurance_Carname {
      return PolicyPeriod.Arm_Insurance.CarName
    }
    
    // 'value' attribute on TypeKeyInput (id=CarModel_Input) at Arm_Insurance_InputSet.pcf: line 101, column 51
    function value_87 () : typekey.Arm_InsuranceCar_Model {
      return PolicyPeriod.Arm_Insurance.CarModel
    }
    
    // 'visible' attribute on TextInput (id=AssignedRisk_Input) at Arm_Insurance_InputSet.pcf: line 78, column 52
    function visible_61 () : java.lang.Boolean {
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