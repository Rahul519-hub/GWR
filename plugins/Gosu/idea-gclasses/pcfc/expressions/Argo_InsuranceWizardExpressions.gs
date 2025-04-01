package pcfc.expressions

uses pcf.*
uses entity.*
uses typekey.*
uses gw.api.locale.DisplayKey
@javax.annotation.Generated("config/web/pcf/Argo_Insurance/Argo_InsuranceWizard.pcf", "", "com.guidewire.pcfgen.PCFClassGenerator")
class Argo_InsuranceWizardExpressions {
  @javax.annotation.Generated("config/web/pcf/Argo_Insurance/Argo_InsuranceWizard.pcf", "", "com.guidewire.pcfgen.PCFClassGenerator")
  public static class Argo_InsuranceWizardExpressionsImpl extends gw.api.web.ScopeBaseClass {
    public construct(widget :  Object) {
      super(widget, 0)
    }
    
    protected construct(widget :  Object, scopeDepth :  int) {
      super(widget, scopeDepth)
    }
    
    static function __constructorIndex () : int {
      return 0
    }
    
    // 'tabBar' attribute on Wizard (id=Argo_InsuranceWizard) at Argo_InsuranceWizard.pcf: line 6, column 31
    function tabBar_onEnter_0 (def :  pcf.TabBar) : void {
      def.onEnter()
    }
    
    // 'tabBar' attribute on Wizard (id=Argo_InsuranceWizard) at Argo_InsuranceWizard.pcf: line 6, column 31
    function tabBar_refreshVariables_1 (def :  pcf.TabBar) : void {
      def.refreshVariables()
    }
    
    override property get CurrentLocation () : pcf.Argo_InsuranceWizard {
      return super.CurrentLocation as pcf.Argo_InsuranceWizard
    }
    
    
  }
  
  
}