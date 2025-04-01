package pcfc.expressions

uses pcf.*
uses entity.*
uses typekey.*
uses gw.api.locale.DisplayKey
@javax.annotation.Generated("config/web/pcf/ARM_Insurance/Arm_InsurancePopup.pcf", "", "com.guidewire.pcfgen.PCFClassGenerator")
class Arm_InsurancePopupExpressions {
  @javax.annotation.Generated("config/web/pcf/ARM_Insurance/Arm_InsurancePopup.pcf", "", "com.guidewire.pcfgen.PCFClassGenerator")
  public static class Arm_InsurancePopupExpressionsImpl extends gw.api.web.ScopeBaseClass {
    public construct(widget :  Object) {
      super(widget, 0)
    }
    
    protected construct(widget :  Object, scopeDepth :  int) {
      super(widget, scopeDepth)
    }
    
    static function __constructorIndex (Arm_Insurance :  Arm_Insurance) : int {
      return 0
    }
    
    // 'value' attribute on TextInput (id=FirstName_Input) at Arm_InsurancePopup.pcf: line 25, column 46
    function defaultSetter_3 (__VALUE_TO_SET :  java.lang.Object) : void {
      Arm_Insurance.FirstName = (__VALUE_TO_SET as java.lang.String)
    }
    
    // 'editable' attribute on TextInput (id=FirstName_Input) at Arm_InsurancePopup.pcf: line 25, column 46
    function editable_1 () : java.lang.Boolean {
      return true 
    }
    
    // EditButtons at Arm_InsurancePopup.pcf: line 17, column 23
    function label_0 () : java.lang.Object {
      return gw.api.util.LocationUtil.hasOwnBundle(CurrentLocation) ? DisplayKey.get("Button.Update") : DisplayKey.get("Button.OK")
    }
    
    // 'value' attribute on TextInput (id=FirstName_Input) at Arm_InsurancePopup.pcf: line 25, column 46
    function valueRoot_4 () : java.lang.Object {
      return Arm_Insurance
    }
    
    // 'value' attribute on TextInput (id=FirstName_Input) at Arm_InsurancePopup.pcf: line 25, column 46
    function value_2 () : java.lang.String {
      return Arm_Insurance.FirstName
    }
    
    property get Arm_Insurance () : Arm_Insurance {
      return getVariableValue("Arm_Insurance", 0) as Arm_Insurance
    }
    
    property set Arm_Insurance ($arg :  Arm_Insurance) {
      setVariableValue("Arm_Insurance", 0, $arg)
    }
    
    override property get CurrentLocation () : pcf.Arm_InsurancePopup {
      return super.CurrentLocation as pcf.Arm_InsurancePopup
    }
    
    
  }
  
  
}