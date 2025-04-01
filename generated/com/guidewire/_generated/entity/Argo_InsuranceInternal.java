package com.guidewire._generated.entity;

@javax.annotation.Generated(value = "com.guidewire.pl.metadata.codegen.Codegen", comments = "Argo_Insurance.eti;Argo_Insurance.eix;Argo_Insurance.etx")
@java.lang.SuppressWarnings(value = {"deprecation", "unchecked"})
public interface Argo_InsuranceInternal extends com.guidewire._generated.entity.EditableInternal {
  /**
   * Adds the given element to the ArgoInsurancePlans array. This is achieved by setting the parent foreign key to this entity instance.
   */
  public void addToArgoInsurancePlans(entity.ArgoInsurancePlans element);
  
  
  /**
   * Gets the value of the Age field.
   */
  @gw.internal.gosu.parser.ExtendedProperty
  public java.lang.Integer getAge();
  
  
  /**
   * Gets the value of the ArgoInsurancePlans field.
   */
  @gw.internal.gosu.parser.ExtendedProperty
  public entity.ArgoInsurancePlans[] getArgoInsurancePlans();
  
  
  /**
   * Gets the value of the Argo_Desig field.
   */
  @gw.internal.gosu.parser.ExtendedProperty
  public typekey.Argo_Desig getArgo_Desig();
  
  
  /**
   * Gets the value of the Argo_Employee_Worksheet field.
   */
  @gw.internal.gosu.parser.ExtendedProperty
  public entity.Argo_Employee_Worksheet getArgo_Employee_Worksheet();
  
  
  public gw.pl.persistence.core.Key getArgo_Employee_WorksheetID();
  
  
  /**
   * Gets the value of the Argo_Occup field.
   */
  @gw.internal.gosu.parser.ExtendedProperty
  public typekey.Argo_Occup getArgo_Occup();
  
  
  /**
   * Gets the value of the Country field.
   */
  @gw.internal.gosu.parser.ExtendedProperty
  public typekey.Country getCountry();
  
  
  /**
   * Gets the value of the DOB field.
   */
  @gw.internal.gosu.parser.ExtendedProperty
  public java.util.Date getDOB();
  
  
  /**
   * Gets the value of the Firstname field.
   */
  @gw.internal.gosu.parser.ExtendedProperty
  public java.lang.String getFirstname();
  
  
  /**
   * Gets the value of the FullName field.
   */
  @gw.internal.gosu.parser.ExtendedProperty
  public java.lang.String getFullName();
  
  
  /**
   * Gets the value of the Gender field.
   */
  @gw.internal.gosu.parser.ExtendedProperty
  public typekey.GenderType getGender();
  
  
  /**
   * Gets the value of the LastName field.
   */
  @gw.internal.gosu.parser.ExtendedProperty
  public java.lang.String getLastName();
  
  
  /**
   * Gets the value of the LicenseDate field.
   */
  @gw.internal.gosu.parser.ExtendedProperty
  public java.util.Date getLicenseDate();
  
  
  /**
   * Gets the value of the LoadCommandID field.
   * LoadCommand for load where row was created. If not null this object was loaded via the loader.
   */
  @gw.internal.gosu.parser.ExtendedProperty
  public java.lang.Long getLoadCommandID();
  
  
  /**
   * Gets the value of the Passportnumber field.
   */
  @gw.internal.gosu.parser.ExtendedProperty
  public java.lang.String getPassportnumber();
  
  
  /**
   * Gets the value of the Phone field.
   */
  @gw.internal.gosu.parser.ExtendedProperty
  public java.lang.String getPhone();
  
  
  /**
   * Gets the value of the PhoneCountryCode field.
   */
  @gw.internal.gosu.parser.ExtendedProperty
  public typekey.PhoneCountryCode getPhoneCountryCode();
  
  
  /**
   * Gets the value of the PolicyNumber field.
   */
  @gw.internal.gosu.parser.ExtendedProperty
  public java.lang.String getPolicyNumber();
  
  
  /**
   * Gets the value of the SSN field.
   */
  @gw.internal.gosu.parser.ExtendedProperty
  public java.lang.String getSSN();
  
  
  /**
   * Gets the value of the Subtype field.
   * Identifies a particular subtype within a supertype table; each subtype of a supertype has its own unique subtype value
   */
  @gw.internal.gosu.parser.ExtendedProperty
  public typekey.Argo_Insurance getSubtype();
  
  
  /**
   * Gets the value of the Username field.
   */
  @gw.internal.gosu.parser.ExtendedProperty
  public java.lang.String getUsername();
  
  
  /**
   * Gets the value of the AssignedRisk field.
   */
  @gw.internal.gosu.parser.ExtendedProperty
  public java.lang.Boolean isAssignedRisk();
  
  
  /**
   * Gets the value of the Button field.
   */
  @gw.internal.gosu.parser.ExtendedProperty
  public java.lang.Boolean isButton();
  
  
  /**
   * Removes the given element from the ArgoInsurancePlans array. This is achieved by marking the element for removal.
   */
  public void removeFromArgoInsurancePlans(entity.ArgoInsurancePlans element);
  
  
  /**
   * Removes the given element from the ArgoInsurancePlans array. This is achieved by marking the element for removal.
   * @deprecated Please use the version that takes an entity instead.
   */
  @java.lang.Deprecated
  public void removeFromArgoInsurancePlans(gw.pl.persistence.core.Key elementID);
  
  
  /**
   * Sets the value of the Age field.
   */
  public void setAge(java.lang.Integer value);
  
  
  /**
   * Sets the value of the ArgoInsurancePlans field.
   */
  public void setArgoInsurancePlans(entity.ArgoInsurancePlans[] value);
  
  
  /**
   * Sets the value of the Argo_Desig field.
   */
  public void setArgo_Desig(typekey.Argo_Desig value);
  
  
  /**
   * Sets the value of the Argo_Employee_Worksheet field.
   */
  public void setArgo_Employee_Worksheet(entity.Argo_Employee_Worksheet value);
  
  
  public void setArgo_Employee_WorksheetID(gw.pl.persistence.core.Key value);
  
  
  /**
   * Sets the value of the Argo_Occup field.
   */
  public void setArgo_Occup(typekey.Argo_Occup value);
  
  
  /**
   * Sets the value of the AssignedRisk field.
   */
  public void setAssignedRisk(java.lang.Boolean value);
  
  
  /**
   * Sets the value of the Button field.
   */
  public void setButton(java.lang.Boolean value);
  
  
  /**
   * Sets the value of the Country field.
   */
  public void setCountry(typekey.Country value);
  
  
  /**
   * Sets the value of the DOB field.
   */
  public void setDOB(java.util.Date value);
  
  
  /**
   * Sets the value of the Firstname field.
   */
  public void setFirstname(java.lang.String value);
  
  
  /**
   * Sets the value of the FullName field.
   */
  public void setFullName(java.lang.String value);
  
  
  /**
   * Sets the value of the Gender field.
   */
  public void setGender(typekey.GenderType value);
  
  
  /**
   * Sets the value of the LastName field.
   */
  public void setLastName(java.lang.String value);
  
  
  /**
   * Sets the value of the LicenseDate field.
   */
  public void setLicenseDate(java.util.Date value);
  
  
  /**
   * Sets the value of the LoadCommandID field.
   */
  public void setLoadCommandID(java.lang.Long value);
  
  
  /**
   * Sets the value of the Passportnumber field.
   */
  public void setPassportnumber(java.lang.String value);
  
  
  /**
   * Sets the value of the Phone field.
   */
  public void setPhone(java.lang.String value);
  
  
  /**
   * Sets the value of the PhoneCountryCode field.
   */
  public void setPhoneCountryCode(typekey.PhoneCountryCode value);
  
  
  /**
   * Sets the value of the PolicyNumber field.
   */
  public void setPolicyNumber(java.lang.String value);
  
  
  /**
   * Sets the value of the SSN field.
   */
  public void setSSN(java.lang.String value);
  
  
  /**
   * Sets the value of the Subtype field.
   */
  public void setSubtype(typekey.Argo_Insurance value);
  
  
  /**
   * Sets the value of the Username field.
   */
  public void setUsername(java.lang.String value);
  
  
  
}