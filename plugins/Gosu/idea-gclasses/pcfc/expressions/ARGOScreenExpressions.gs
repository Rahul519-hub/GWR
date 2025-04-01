package pcfc.expressions

uses pcf.*
uses entity.*
uses typekey.*
uses gw.api.locale.DisplayKey
@javax.annotation.Generated("config/web/pcf/Argo_Insurance/ARGOScreen.pcf", "", "com.guidewire.pcfgen.PCFClassGenerator")
class ARGOScreenExpressions {
  @javax.annotation.Generated("config/web/pcf/Argo_Insurance/ARGOScreen.pcf", "", "com.guidewire.pcfgen.PCFClassGenerator")
  public static class ARGOScreenExpressionsImpl extends gw.api.web.ScopeBaseClass {
    public construct(widget :  Object) {
      super(widget, 0)
    }
    
    protected construct(widget :  Object, scopeDepth :  int) {
      super(widget, scopeDepth)
    }
    
    // 'def' attribute on PanelRef at ARGOScreen.pcf: line 31, column 47
    function def_onEnter_0 (def :  pcf.ArgLogindetailsDV) : void {
      def.onEnter(LoginForm)
    }
    
    // 'def' attribute on PanelRef at ARGOScreen.pcf: line 31, column 47
    function def_refreshVariables_1 (def :  pcf.ArgLogindetailsDV) : void {
      def.refreshVariables(LoginForm)
    }
    
    property get LoginForm () : gw.api.util.LoginForm {
      return getRequireValue("LoginForm", 0) as gw.api.util.LoginForm
    }
    
    property set LoginForm ($arg :  gw.api.util.LoginForm) {
      setRequireValue("LoginForm", 0, $arg)
    }
    
    
  }
  
  
}