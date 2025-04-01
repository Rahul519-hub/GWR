package com.guidewire._generated.entity;

@javax.annotation.Generated(value = "com.guidewire.pl.metadata.codegen.Codegen", comments = "Argo_DiverValues.eti;Argo_DiverValues.eix;Argo_DiverValues.etx")
@java.lang.SuppressWarnings(value = {"deprecation", "unchecked"})
public class Argo_DiverValuesVersionListImpl extends com.guidewire.pl.system.entity.proxy.EffDatedVersionListImpl implements entity.windowed.Argo_DiverValuesVersionList {
  public Argo_DiverValuesVersionListImpl(entity.Argo_DiverValues base)  {
    super(base);
  }
  
  public Argo_DiverValuesVersionListImpl(gw.pl.persistence.core.Bundle bundle, gw.pl.persistence.core.effdate.EffDatedKey effDatedKey)  {
    super(bundle, effDatedKey);
  }
  
  @java.lang.Override
  public entity.Argo_DiverValues AsOf(java.util.Date date) {
    return (entity.Argo_DiverValues)getVersionAsOf(date);
  }
  
  @java.lang.Override
  public java.util.List<? extends entity.Argo_DiverValues> getAllVersions() {
    return (java.util.List)getAllVersionsUntyped();
  }
  
  
}