package pcfc.expressions

uses pcf.*
uses entity.*
uses typekey.*
uses gw.api.locale.DisplayKey
@javax.annotation.Generated("config/web/pcf/Argo_Insurance/Argo_Insurance_empWorksheet.pcf", "", "com.guidewire.pcfgen.PCFClassGenerator")
class Argo_Insurance_empWorksheetExpressions {
  @javax.annotation.Generated("config/web/pcf/Argo_Insurance/Argo_Insurance_empWorksheet.pcf", "", "com.guidewire.pcfgen.PCFClassGenerator")
  public static class Argo_Insurance_empWorksheetExpressionsImpl extends gw.api.web.ScopeBaseClass {
    public construct(widget :  Object) {
      super(widget, 0)
    }
    
    protected construct(widget :  Object, scopeDepth :  int) {
      super(widget, scopeDepth)
    }
    
    static function __constructorIndex (Argo_Insurance :  Argo_Insurance) : int {
      return 0
    }
    
    // 'value' attribute on TextInput (id=InsuranceAgentName_Input) at Argo_Insurance_empWorksheet.pcf: line 33, column 80
    function defaultSetter_10 (__VALUE_TO_SET :  java.lang.Object) : void {
      Argo_Insurance.Argo_Employee_Worksheet.InsuranceAgentName = (__VALUE_TO_SET as java.lang.String)
    }
    
    // 'value' attribute on TextInput (id=AgentCode_Input) at Argo_Insurance_empWorksheet.pcf: line 39, column 44
    function defaultSetter_16 (__VALUE_TO_SET :  java.lang.Object) : void {
      Argo_Insurance.Argo_Employee_Worksheet.AgentCode = (__VALUE_TO_SET as java.lang.Integer)
    }
    
    // 'value' attribute on TextInput (id=EmployeeID_Input) at Argo_Insurance_empWorksheet.pcf: line 28, column 72
    function defaultSetter_4 (__VALUE_TO_SET :  java.lang.Object) : void {
      Argo_Insurance.Argo_Employee_Worksheet.EmployeeID = (__VALUE_TO_SET as java.lang.String)
    }
    
    // 'editable' attribute on TextInput (id=EmployeeID_Input) at Argo_Insurance_empWorksheet.pcf: line 28, column 72
    function editable_2 () : java.lang.Boolean {
      return true 
    }
    
    // EditButtons at Argo_Insurance_empWorksheet.pcf: line 20, column 23
    function label_1 () : java.lang.Object {
      return gw.api.util.LocationUtil.hasOwnBundle(CurrentLocation) ? DisplayKey.get("Button.Update") : DisplayKey.get("Button.OK")
    }
    
    // 'location' attribute on Scope at Argo_Insurance_empWorksheet.pcf: line 14, column 50
    function location_0 () : pcf.api.Destination {
      return pcf.Argo_PPupPopup.createDestination(Argo_Insurance)
    }
    
    // 'value' attribute on TextInput (id=EmployeeID_Input) at Argo_Insurance_empWorksheet.pcf: line 28, column 72
    function valueRoot_5 () : java.lang.Object {
      return Argo_Insurance.Argo_Employee_Worksheet
    }
    
    // 'value' attribute on TextInput (id=AgentCode_Input) at Argo_Insurance_empWorksheet.pcf: line 39, column 44
    function value_15 () : java.lang.Integer {
      return Argo_Insurance.Argo_Employee_Worksheet.AgentCode
    }
    
    // 'value' attribute on TextInput (id=EmployeeID_Input) at Argo_Insurance_empWorksheet.pcf: line 28, column 72
    function value_3 () : java.lang.String {
      return Argo_Insurance.Argo_Employee_Worksheet.EmployeeID
    }
    
    // 'value' attribute on TextInput (id=InsuranceAgentName_Input) at Argo_Insurance_empWorksheet.pcf: line 33, column 80
    function value_9 () : java.lang.String {
      return Argo_Insurance.Argo_Employee_Worksheet.InsuranceAgentName
    }
    
    property get Argo_Insurance () : Argo_Insurance {
      return getVariableValue("Argo_Insurance", 0) as Argo_Insurance
    }
    
    property set Argo_Insurance ($arg :  Argo_Insurance) {
      setVariableValue("Argo_Insurance", 0, $arg)
    }
    
    override property get CurrentLocation () : pcf.Argo_Insurance_empWorksheet {
      return super.CurrentLocation as pcf.Argo_Insurance_empWorksheet
    }
    
    
  }
  
  
}