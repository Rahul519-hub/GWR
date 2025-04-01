package pcfc.expressions

uses pcf.*
uses entity.*
uses typekey.*
uses gw.api.locale.DisplayKey
@javax.annotation.Generated("config/web/pcf/ARM_Insurance/Arm_Insurance_Screen.pcf", "", "com.guidewire.pcfgen.PCFClassGenerator")
class Arm_Insurance_ScreenExpressions {
  @javax.annotation.Generated("config/web/pcf/ARM_Insurance/Arm_Insurance_Screen.pcf", "", "com.guidewire.pcfgen.PCFClassGenerator")
  public static class Arm_Insurance_ScreenExpressionsImpl extends gw.api.web.ScopeBaseClass {
    public construct(widget :  Object) {
      super(widget, 0)
    }
    
    protected construct(widget :  Object, scopeDepth :  int) {
      super(widget, scopeDepth)
    }
    
    // 'def' attribute on PanelRef at Arm_Insurance_Screen.pcf: line 19, column 48
    function def_onEnter_1 (def :  pcf.Arm_InsuranceDV) : void {
      def.onEnter(PolicyPeriod)
    }
    
    // 'def' attribute on PanelRef at Arm_Insurance_Screen.pcf: line 19, column 48
    function def_refreshVariables_2 (def :  pcf.Arm_InsuranceDV) : void {
      def.refreshVariables(PolicyPeriod)
    }
    
    // EditButtons at Arm_Insurance_Screen.pcf: line 11, column 21
    function label_0 () : java.lang.Object {
      return gw.api.util.LocationUtil.hasOwnBundle(CurrentLocation) ? DisplayKey.get("Button.Update") : DisplayKey.get("Button.OK")
    }
    
    property get PolicyPeriod () : PolicyPeriod {
      return getRequireValue("PolicyPeriod", 0) as PolicyPeriod
    }
    
    property set PolicyPeriod ($arg :  PolicyPeriod) {
      setRequireValue("PolicyPeriod", 0, $arg)
    }
    
    
  }
  
  
}