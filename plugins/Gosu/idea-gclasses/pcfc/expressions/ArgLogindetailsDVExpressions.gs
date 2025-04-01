package pcfc.expressions

uses pcf.*
uses entity.*
uses typekey.*
uses gw.api.locale.DisplayKey
@javax.annotation.Generated("config/web/pcf/Argo_newproject/ArgLogindetailsDV.pcf", "", "com.guidewire.pcfgen.PCFClassGenerator")
class ArgLogindetailsDVExpressions {
  @javax.annotation.Generated("config/web/pcf/Argo_newproject/ArgLogindetailsDV.pcf", "", "com.guidewire.pcfgen.PCFClassGenerator")
  public static class ArgLogindetailsDVExpressionsImpl extends gw.api.web.ScopeBaseClass {
    public construct(widget :  Object) {
      super(widget, 0)
    }
    
    protected construct(widget :  Object, scopeDepth :  int) {
      super(widget, scopeDepth)
    }
    
    // 'action' attribute on LoginSubmitButton (id=submit_Input) at ArgLogindetailsDV.pcf: line 36, column 65
    function action_13 () : void {
      LoginForm.login()
    }
    
    // 'value' attribute on PasswordInput (id=Pazwrd_Input) at ArgLogindetailsDV.pcf: line 19, column 37
    function defaultSetter_2 (__VALUE_TO_SET :  java.lang.Object) : void {
      LoginForm.Password = (__VALUE_TO_SET as java.lang.String)
    }
    
    // 'editable' attribute on PasswordInput (id=Pazwrd_Input) at ArgLogindetailsDV.pcf: line 19, column 37
    function editable_0 () : java.lang.Boolean {
      return true 
    }
    
    // 'value' attribute on PasswordInput (id=Pazwrd_Input) at ArgLogindetailsDV.pcf: line 19, column 37
    function valueRoot_3 () : java.lang.Object {
      return LoginForm
    }
    
    // 'value' attribute on PasswordInput (id=Pazwrd_Input) at ArgLogindetailsDV.pcf: line 19, column 37
    function value_1 () : java.lang.String {
      return LoginForm.Password
    }
    
    // 'value' attribute on InputIterator at ArgLogindetailsDV.pcf: line 23, column 52
    function value_12 () : gw.api.util.LoginForm.Factor[] {
      return LoginForm.AdditionalFactors
    }
    
    property get LoginForm () : gw.api.util.LoginForm {
      return getRequireValue("LoginForm", 0) as gw.api.util.LoginForm
    }
    
    property set LoginForm ($arg :  gw.api.util.LoginForm) {
      setRequireValue("LoginForm", 0, $arg)
    }
    
    
  }
  
  @javax.annotation.Generated("config/web/pcf/Argo_newproject/ArgLogindetailsDV.pcf", "", "com.guidewire.pcfgen.PCFClassGenerator")
  public static class IteratorEntryExpressionsImpl extends ArgLogindetailsDVExpressionsImpl {
    public construct(widget :  Object) {
      super(widget, 1)
    }
    
    protected construct(widget :  Object, scopeDepth :  int) {
      super(widget, scopeDepth)
    }
    
    // 'value' attribute on PasswordInput (id=Factor_Input) at ArgLogindetailsDV.pcf: line 28, column 33
    function defaultSetter_8 (__VALUE_TO_SET :  java.lang.Object) : void {
      factor.Value = (__VALUE_TO_SET as java.lang.String)
    }
    
    // 'label' attribute on PasswordInput (id=Factor_Input) at ArgLogindetailsDV.pcf: line 28, column 33
    function label_6 () : java.lang.Object {
      return factor.Label
    }
    
    // 'value' attribute on PasswordInput (id=Factor_Input) at ArgLogindetailsDV.pcf: line 28, column 33
    function valueRoot_9 () : java.lang.Object {
      return factor
    }
    
    // 'value' attribute on PasswordInput (id=Factor_Input) at ArgLogindetailsDV.pcf: line 28, column 33
    function value_7 () : java.lang.String {
      return factor.Value
    }
    
    property get factor () : gw.api.util.LoginForm.Factor {
      return getIteratedValue(1) as gw.api.util.LoginForm.Factor
    }
    
    
  }
  
  
}