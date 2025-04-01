package pcfc.expressions

uses pcf.*
uses entity.*
uses typekey.*
uses gw.api.locale.DisplayKey
@javax.annotation.Generated("config/web/pcf/Argo_Insurance/Argo_DiverPanelSet.pcf", "", "com.guidewire.pcfgen.PCFClassGenerator")
class Argo_DiverPanelSetExpressions {
  @javax.annotation.Generated("config/web/pcf/Argo_Insurance/Argo_DiverPanelSet.pcf", "", "com.guidewire.pcfgen.PCFClassGenerator")
  public static class Argo_DiverPanelSetExpressionsImpl extends gw.api.web.ScopeBaseClass {
    public construct(widget :  Object) {
      super(widget, 0)
    }
    
    protected construct(widget :  Object, scopeDepth :  int) {
      super(widget, scopeDepth)
    }
    
    // 'value' attribute on BooleanRadioInput (id=DriverOverride_Input) at Argo_DiverPanelSet.pcf: line 40, column 67
    function defaultSetter_16 (__VALUE_TO_SET :  java.lang.Object) : void {
      Policydriver.Argo_DiverValues.DriverOverride_T = (__VALUE_TO_SET as java.lang.Boolean)
    }
    
    // 'value' attribute on DateTimeInput (id=DriverScoreValues_Input) at DateTimeWidget.xml: line 14, column 28
    function defaultSetter_2 (__VALUE_TO_SET :  java.lang.Object) : void {
      Policydriver.Argo_DiverValues.EffectiveDate = (__VALUE_TO_SET as java.util.Date)
    }
    
    // 'value' attribute on TextInput (id=UsedcarMileage_Input) at Argo_DiverPanelSet.pcf: line 47, column 42
    function defaultSetter_22 (__VALUE_TO_SET :  java.lang.Object) : void {
      Policydriver.Argo_DiverValues.UsedCarMileage = (__VALUE_TO_SET as java.lang.Integer)
    }
    
    // 'value' attribute on TextInput (id=DriverCellPhone_Input) at Argo_DiverPanelSet.pcf: line 53, column 66
    function defaultSetter_28 (__VALUE_TO_SET :  java.lang.Object) : void {
      Policydriver.Argo_DiverValues.DriverCellPhone = (__VALUE_TO_SET as java.lang.String)
    }
    
    // 'value' attribute on DateInput (id=DOJ_Input) at Argo_DiverPanelSet.pcf: line 62, column 66
    function defaultSetter_33 (__VALUE_TO_SET :  java.lang.Object) : void {
      Policydriver.Argo_DiverValues.DriverStartDate = (__VALUE_TO_SET as java.util.Date)
    }
    
    // 'value' attribute on BooleanRadioInput (id=DriverInformation_Input) at Argo_DiverPanelSet.pcf: line 70, column 50
    function defaultSetter_40 (__VALUE_TO_SET :  java.lang.Object) : void {
      Policydriver.DriverInformation = (__VALUE_TO_SET as java.lang.Boolean)
    }
    
    // 'editable' attribute on DateTimeInput (id=DriverScoreValues_Input) at Argo_DiverPanelSet.pcf: line 35, column 64
    function editable_9 () : java.lang.Boolean {
      return true 
    }
    
    // 'onChange' attribute on DateTimeInput (id=DriverScoreValues_Input) at DateTimeWidget.xml: line 16, column 35
    function onChange_0 () : void {
      
    }
    
    // 'onChange' attribute on PostOnChange at Argo_DiverPanelSet.pcf: line 72, column 70
    function onChange_37 () : void {
      Policydriver.DriverInformationPostOnChange()
    }
    
    // 'onChange' attribute on DateTimeInput (id=DriverScoreValues_Input) at DateTimeWidget.xml: line 32, column 33
    function onChange_5 () : void {
      
    }
    
    // 'value' attribute on DateTimeInput (id=DriverScoreValues_Input) at DateTimeWidget.xml: line 14, column 28
    function valueRoot_3 () : java.lang.Object {
      return Policydriver.Argo_DiverValues
    }
    
    // 'value' attribute on BooleanRadioInput (id=DriverInformation_Input) at Argo_DiverPanelSet.pcf: line 70, column 50
    function valueRoot_41 () : java.lang.Object {
      return Policydriver
    }
    
    // 'value' attribute on DateTimeInput (id=DriverScoreValues_Input) at DateTimeWidget.xml: line 14, column 28
    function value_1 () : java.util.Date {
      return Policydriver.Argo_DiverValues.EffectiveDate
    }
    
    // 'value' attribute on BooleanRadioInput (id=DriverOverride_Input) at Argo_DiverPanelSet.pcf: line 40, column 67
    function value_15 () : java.lang.Boolean {
      return Policydriver.Argo_DiverValues.DriverOverride_T
    }
    
    // 'value' attribute on TextInput (id=UsedcarMileage_Input) at Argo_DiverPanelSet.pcf: line 47, column 42
    function value_21 () : java.lang.Integer {
      return Policydriver.Argo_DiverValues.UsedCarMileage
    }
    
    // 'value' attribute on TextInput (id=DriverCellPhone_Input) at Argo_DiverPanelSet.pcf: line 53, column 66
    function value_27 () : java.lang.String {
      return Policydriver.Argo_DiverValues.DriverCellPhone
    }
    
    // 'value' attribute on DateInput (id=DOJ_Input) at Argo_DiverPanelSet.pcf: line 62, column 66
    function value_32 () : java.util.Date {
      return Policydriver.Argo_DiverValues.DriverStartDate
    }
    
    // 'value' attribute on BooleanRadioInput (id=DriverInformation_Input) at Argo_DiverPanelSet.pcf: line 70, column 50
    function value_39 () : java.lang.Boolean {
      return Policydriver.DriverInformation
    }
    
    // 'visible' attribute on DateTimeInput (id=DriverScoreValues_Input) at DateTimeWidget.xml: line 23, column 34
    function visible_4 () : java.lang.Boolean {
      return true and true and Policydriver.Argo_DiverValues.EffectiveDate != null
    }
    
    property get DriverCellphone () : Boolean {
      return getVariableValue("DriverCellphone", 0) as Boolean
    }
    
    property set DriverCellphone ($arg :  Boolean) {
      setVariableValue("DriverCellphone", 0, $arg)
    }
    
    property get OpenEdit () : Boolean {
      return getRequireValue("OpenEdit", 0) as Boolean
    }
    
    property set OpenEdit ($arg :  Boolean) {
      setRequireValue("OpenEdit", 0, $arg)
    }
    
    property get Paline () : entity.PersonalAutoLine {
      return getRequireValue("Paline", 0) as entity.PersonalAutoLine
    }
    
    property set Paline ($arg :  entity.PersonalAutoLine) {
      setRequireValue("Paline", 0, $arg)
    }
    
    property get Policydriver () : PolicyDriver {
      return getRequireValue("Policydriver", 0) as PolicyDriver
    }
    
    property set Policydriver ($arg :  PolicyDriver) {
      setRequireValue("Policydriver", 0, $arg)
    }
    
    
  }
  
  
}