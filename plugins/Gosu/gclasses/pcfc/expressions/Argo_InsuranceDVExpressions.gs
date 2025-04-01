package pcfc.expressions

uses pcf.*
uses entity.*
uses typekey.*
uses gw.api.locale.DisplayKey
@javax.annotation.Generated("config/web/pcf/Argo_Insurance/Argo_InsuranceDV.pcf", "", "com.guidewire.pcfgen.PCFClassGenerator")
class Argo_InsuranceDVExpressions {
  @javax.annotation.Generated("config/web/pcf/Argo_Insurance/Argo_InsuranceDV.pcf", "", "com.guidewire.pcfgen.PCFClassGenerator")
  public static class Argo_InsuranceDVExpressionsImpl extends gw.api.web.ScopeBaseClass {
    public construct(widget :  Object) {
      super(widget, 0)
    }
    
    protected construct(widget :  Object, scopeDepth :  int) {
      super(widget, scopeDepth)
    }
    
    // 'def' attribute on InputSetRef at Argo_InsuranceDV.pcf: line 12, column 52
    function def_onEnter_0 (def :  pcf.ArgoInsuranceInputSet) : void {
      def.onEnter(PolicyPeriod)
    }
    
    // 'def' attribute on ListViewInput at Argo_InsuranceDV.pcf: line 16, column 46
    function def_onEnter_2 (def :  pcf.Argo_InsuranceLV) : void {
      def.onEnter(PolicyPeriod)
    }
    
    // 'def' attribute on InputSetRef at Argo_InsuranceDV.pcf: line 12, column 52
    function def_refreshVariables_1 (def :  pcf.ArgoInsuranceInputSet) : void {
      def.refreshVariables(PolicyPeriod)
    }
    
    // 'def' attribute on ListViewInput at Argo_InsuranceDV.pcf: line 16, column 46
    function def_refreshVariables_3 (def :  pcf.Argo_InsuranceLV) : void {
      def.refreshVariables(PolicyPeriod)
    }
    
    property get PolicyPeriod () : PolicyPeriod {
      return getRequireValue("PolicyPeriod", 0) as PolicyPeriod
    }
    
    property set PolicyPeriod ($arg :  PolicyPeriod) {
      setRequireValue("PolicyPeriod", 0, $arg)
    }
    
    
  }
  
  
}