package com.redhat.telemetry.integration.sat5;

public class PortalCredentials {

  private String username;
  private String password;

  public PortalCredentials() {
  }

  public PortalCredentials(String username, String password) {
    this.username = username;
    this.password = password;
  }

  public void setPassword(String password) {
    this.password = password;
  }

  public String getPassword() {
    return this.password;
  }

  public void setUsername(String username) {
    this.username = username;
  }

  public String getUsername() {
    return this.username;
  }
}
