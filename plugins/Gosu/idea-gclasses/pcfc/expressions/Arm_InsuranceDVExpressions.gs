package pcfc.expressions

uses pcf.*
uses entity.*
uses typekey.*
uses gw.api.locale.DisplayKey
@javax.annotation.Generated("config/web/pcf/ARM_Insurance/Arm_InsuranceDV.pcf", "", "com.guidewire.pcfgen.PCFClassGenerator")
class Arm_InsuranceDVExpressions {
  @javax.annotation.Generated("config/web/pcf/ARM_Insurance/Arm_InsuranceDV.pcf", "", "com.guidewire.pcfgen.PCFClassGenerator")
  public static class Arm_InsuranceDVExpressionsImpl extends gw.api.web.ScopeBaseClass {
    public construct(widget :  Object) {
      super(widget, 0)
    }
    
    protected construct(widget :  Object, scopeDepth :  int) {
      super(widget, scopeDepth)
    }
    
    // 'def' attribute on InputSetRef at Arm_InsuranceDV.pcf: line 14, column 55
    function def_onEnter_0 (def :  pcf.Arm_Insurance_InputSet) : void {
      def.onEnter(PolicyPeriod)
    }
    
    // 'def' attribute on InputSetRef at Arm_InsuranceDV.pcf: line 14, column 55
    function def_refreshVariables_1 (def :  pcf.Arm_Insurance_InputSet) : void {
      def.refreshVariables(PolicyPeriod)
    }
    
    // 'editable' attribute on DetailViewPanel (id=Arm_InsuranceDV) at Arm_InsuranceDV.pcf: line 7, column 26
    function editable_2 () : java.lang.Boolean {
      return true 
    }
    
    property get PolicyPeriod () : PolicyPeriod {
      return getRequireValue("PolicyPeriod", 0) as PolicyPeriod
    }
    
    property set PolicyPeriod ($arg :  PolicyPeriod) {
      setRequireValue("PolicyPeriod", 0, $arg)
    }
    
    
  }
  
  
}