package pcfc.expressions

uses pcf.*
uses entity.*
uses typekey.*
uses gw.api.locale.DisplayKey
@javax.annotation.Generated("config/web/pcf/Argo_Insurance/Argo_PPupPopup.pcf", "", "com.guidewire.pcfgen.PCFClassGenerator")
class Argo_PPupPopupExpressions {
  @javax.annotation.Generated("config/web/pcf/Argo_Insurance/Argo_PPupPopup.pcf", "", "com.guidewire.pcfgen.PCFClassGenerator")
  public static class Argo_PPupPopupExpressionsImpl extends gw.api.web.ScopeBaseClass {
    public construct(widget :  Object) {
      super(widget, 0)
    }
    
    protected construct(widget :  Object, scopeDepth :  int) {
      super(widget, scopeDepth)
    }
    
    static function __constructorIndex (policyperiod :  PolicyPeriod) : int {
      return 0
    }
    
    // 'canEdit' attribute on Popup (id=Argo_PPupPopup) at Argo_PPupPopup.pcf: line 10, column 40
    function canEdit_0 () : java.lang.Boolean {
      return true 
    }
    
    // 'canVisit' attribute on Popup (id=Argo_PPupPopup) at Argo_PPupPopup.pcf: line 10, column 40
    static function canVisit_1 (policyperiod :  PolicyPeriod) : java.lang.Boolean {
      return true 
    }
    
    override property get CurrentLocation () : pcf.Argo_PPupPopup {
      return super.CurrentLocation as pcf.Argo_PPupPopup
    }
    
    property get policyperiod () : PolicyPeriod {
      return getVariableValue("policyperiod", 0) as PolicyPeriod
    }
    
    property set policyperiod ($arg :  PolicyPeriod) {
      setVariableValue("policyperiod", 0, $arg)
    }
    
    
  }
  
  
}