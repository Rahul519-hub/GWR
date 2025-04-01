package com.guidewire._generated.entity;

@javax.annotation.Generated(value = "com.guidewire.pl.metadata.codegen.Codegen", comments = "Argo_Employee_Worksheet.eti;Argo_Employee_Worksheet.eix;Argo_Employee_Worksheet.etx")
@java.lang.SuppressWarnings(value = {"deprecation", "unchecked"})
public interface Argo_Employee_WorksheetInternal extends com.guidewire._generated.entity.RetireableInternal {
  /**
   * Gets the value of the AgentCode field.
   */
  @gw.internal.gosu.parser.ExtendedProperty
  public java.lang.Integer getAgentCode();
  
  
  /**
   * Gets the value of the EmployeeID field.
   */
  @gw.internal.gosu.parser.ExtendedProperty
  public java.lang.String getEmployeeID();
  
  
  /**
   * Gets the value of the InsuranceAgentName field.
   */
  @gw.internal.gosu.parser.ExtendedProperty
  public java.lang.String getInsuranceAgentName();
  
  
  /**
   * Gets the value of the LoadCommandID field.
   * LoadCommand for load where row was created. If not null this object was loaded via the loader.
   */
  @gw.internal.gosu.parser.ExtendedProperty
  public java.lang.Long getLoadCommandID();
  
  
  /**
   * Sets the value of the AgentCode field.
   */
  public void setAgentCode(java.lang.Integer value);
  
  
  /**
   * Sets the value of the EmployeeID field.
   */
  public void setEmployeeID(java.lang.String value);
  
  
  /**
   * Sets the value of the InsuranceAgentName field.
   */
  public void setInsuranceAgentName(java.lang.String value);
  
  
  /**
   * Sets the value of the LoadCommandID field.
   */
  public void setLoadCommandID(java.lang.Long value);
  
  
  
}