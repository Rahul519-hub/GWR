package pcfc.expressions

uses pcf.*
uses entity.*
uses typekey.*
uses gw.api.locale.DisplayKey
@javax.annotation.Generated("config/web/pcf/Argo_Insurance/Argo_Insurancepge.pcf", "", "com.guidewire.pcfgen.PCFClassGenerator")
class Argo_InsurancepgeExpressions {
  @javax.annotation.Generated("config/web/pcf/Argo_Insurance/Argo_Insurancepge.pcf", "", "com.guidewire.pcfgen.PCFClassGenerator")
  public static class Argo_InsurancepgeExpressionsImpl extends gw.api.web.ScopeBaseClass {
    public construct(widget :  Object) {
      super(widget, 0)
    }
    
    protected construct(widget :  Object, scopeDepth :  int) {
      super(widget, scopeDepth)
    }
    
    static function __constructorIndex () : int {
      return 0
    }
    
    // 'def' attribute on ScreenRef at Argo_Insurancepge.pcf: line 15, column 36
    function def_onEnter_0 (def :  pcf.ARGOScreen) : void {
      def.onEnter(LoginForm)
    }
    
    // 'def' attribute on ScreenRef at Argo_Insurancepge.pcf: line 15, column 36
    function def_refreshVariables_1 (def :  pcf.ARGOScreen) : void {
      def.refreshVariables(LoginForm)
    }
    
    // Page (id=Argo_Insurancepge) at Argo_Insurancepge.pcf: line 7, column 40
    static function parent_2 () : pcf.api.Destination {
      return pcf.Desktop.createDestination()
    }
    
    override property get CurrentLocation () : pcf.Argo_Insurancepge {
      return super.CurrentLocation as pcf.Argo_Insurancepge
    }
    
    property get LoginForm () : gw.api.util.LoginForm {
      return getVariableValue("LoginForm", 0) as gw.api.util.LoginForm
    }
    
    property set LoginForm ($arg :  gw.api.util.LoginForm) {
      setVariableValue("LoginForm", 0, $arg)
    }
    
    property get String () : String {
      return getVariableValue("String", 0) as String
    }
    
    property set String ($arg :  String) {
      setVariableValue("String", 0, $arg)
    }
    
    
  }
  
  
}