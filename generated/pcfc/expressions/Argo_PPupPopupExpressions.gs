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
    
    static function __constructorIndex (Argo_Insurance :  Argo_Insurance) : int {
      return 0
    }
    
    // 'action' attribute on TextInput (id=Lastname_Input) at Argo_PPupPopup.pcf: line 26, column 46
    function action_2 () : void {
      Argo_Insurance_empWorksheet.goInWorkspace(Argo_Insurance)
    }
    
    // 'action' attribute on TextInput (id=Lastname_Input) at Argo_PPupPopup.pcf: line 26, column 46
    function action_dest_3 () : pcf.api.Destination {
      return pcf.Argo_Insurance_empWorksheet.createDestination(Argo_Insurance)
    }
    
    // 'canEdit' attribute on Popup (id=Argo_PPupPopup) at Argo_PPupPopup.pcf: line 9, column 40
    function canEdit_9 () : java.lang.Boolean {
      return true 
    }
    
    // 'value' attribute on TextInput (id=Lastname_Input) at Argo_PPupPopup.pcf: line 26, column 46
    function defaultSetter_5 (__VALUE_TO_SET :  java.lang.Object) : void {
      Argo_Insurance.LastName = (__VALUE_TO_SET as java.lang.String)
    }
    
    // 'editable' attribute on TextInput (id=Lastname_Input) at Argo_PPupPopup.pcf: line 26, column 46
    function editable_1 () : java.lang.Boolean {
      return false 
    }
    
    // EditButtons at Argo_PPupPopup.pcf: line 17, column 23
    function label_0 () : java.lang.Object {
      return gw.api.util.LocationUtil.hasOwnBundle(CurrentLocation) ? DisplayKey.get("Button.Update") : DisplayKey.get("Button.OK")
    }
    
    // 'value' attribute on TextInput (id=Lastname_Input) at Argo_PPupPopup.pcf: line 26, column 46
    function valueRoot_6 () : java.lang.Object {
      return Argo_Insurance
    }
    
    // 'value' attribute on TextInput (id=Lastname_Input) at Argo_PPupPopup.pcf: line 26, column 46
    function value_4 () : java.lang.String {
      return Argo_Insurance.LastName
    }
    
    property get Argo_Insurance () : Argo_Insurance {
      return getVariableValue("Argo_Insurance", 0) as Argo_Insurance
    }
    
    property set Argo_Insurance ($arg :  Argo_Insurance) {
      setVariableValue("Argo_Insurance", 0, $arg)
    }
    
    override property get CurrentLocation () : pcf.Argo_PPupPopup {
      return super.CurrentLocation as pcf.Argo_PPupPopup
    }
    
    
  }
  
  
}