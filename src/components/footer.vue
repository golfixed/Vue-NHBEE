<template>
      <div>
        <div class="container-fluid footer-bg">
          <div class="container">
            <div class="container">
              <div class="row">
                <div class="col-md-7 address-fix d-flex align-items-center row" style=" padding-right: 0px; padding-left: 0px;">
                  <div class="col-md-4 d-flex flex-row justify-content-center" style=" padding: 20px 0px 40px 0px;">
                    <img class="footer-logo" src="/static/img/logo.png" />
                    <img class="footer-logo" src="/static/img/logo-kmutt.png" />
                  </div>
                  <div class="col-md-8 d-flex flex-column">
                    <h5 style="font-weight: bold;">NHBEE KMUTT</h5>
                    <h6 style="font-weight: bold;">Native Honeybee Research Laboratory</h6>
                    <h6>{{ $t("message.footer.address.name") }}</h6>
                    <h6>{{ $t("message.footer.address.add") }}</h6>
                  </div>
                </div>
                <div class="col-md-5 left-hr quicklink-fix">
                  <div class="row">
                    <div class="col-4 more-left-space">
                      <h6>{{ $t("message.footer.link.col1.colname") }}</h6>
                      <h6 class="sitemap-link">{{ $t("message.footer.link.col1.item1") }}</h6>
                      <h6 class="sitemap-link">{{ $t("message.footer.link.col1.item2") }}</h6>
                      <h6 class="sitemap-link">{{ $t("message.footer.link.col1.item3") }}</h6>
                      <h6 class="sitemap-link">{{ $t("message.footer.link.col1.item4") }}</h6>
                    </div>
                    <div class="col-8" style>
                      <div class="row">
                        <div class="col-6">
                          <h6>{{ $t("message.footer.link.col2.colname") }}</h6>
                          <h6 class="sitemap-link">{{ $t("message.footer.link.col2.item1") }}</h6>
                          <h6 class="sitemap-link">{{ $t("message.footer.link.col2.item2") }}</h6>
                          <h6 class="sitemap-link">{{ $t("message.footer.link.col2.item3") }}</h6>
                          <h6 class="sitemap-link">{{ $t("message.footer.link.col2.item4") }}</h6>
                        </div>
                        <div class="col-6">
                          <h6>{{ $t("message.footer.link.col3.colname") }}</h6>
                          <h6 class="sitemap-link">{{ $t("message.footer.link.col3.item1") }}</h6>
                          <h6 class="sitemap-link">{{ $t("message.footer.link.col3.item2") }}</h6>
                          <h6 class="sitemap-link">{{ $t("message.footer.link.col3.item3") }}</h6>
                          <h6 class="sitemap-link">{{ $t("message.footer.link.col3.item4") }}</h6>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div class="row top-hr" style="padding: 20px 0px 20px 0px;">
                <div class="col-md-6 d-flex justify-content-center">
                  <font-awesome-icon
                    icon="envelope"
                    style="color: #707070; margin: 10px 0px 10px 0px !important;"
                  />
                  <h6
                    style=" text-align: center; color: #5D5D5D !important; font-size: 14px !important; padding: 10px 0px 10px 10px !important; margin: 0px 0px 0px 0px !important;"
                  >{{ $t("message.footer.contact.email") }}</h6>
                </div>
                <div class="col-md-6 d-flex justify-content-center">
                  <font-awesome-icon
                    icon="phone"
                    style="color: #707070; margin: 10px 0px 10px 0px !important;"
                  />
                  <h6
                    style="text-align: center; color: #5D5D5D !important; font-size: 14px !important; padding: 10px 0px 10px 10px !important; margin: 0px 0px 0px 0px !important;"
                  >{{ $t("message.footer.contact.phone") }}</h6>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div class="container-fluid right-bg">
          <div class="container">
            <div class="row d-flex align-items-center">
              <div class="col-6">
                <p
                  style="color: white; font-size: 12px; padding: 10px 0px 10px 0px !important; margin: 0px 0px 0px 0px !important;"
                >Copyright © Native Honeybee Laboratory at KMUTT. All rights reserved.</p>
              </div>
              <div class="col-6 d-flex justify-content-end">
                <font-awesome-icon
                  icon="globe"
                  style="color: white; margin: 10px 0px 10px 0px !important;"
                />
                <p
                  style="color: white !important; font-size: 12px; padding: 10px 0px 10px 10px !important; margin: 0px 0px 0px 0px !important;"
                >
                  <a href class="lng-btn">NNHBEE KMUTT 2019</a>
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
</template>

<script>
export default {
  name: 'footer'
}
</script>

<style>
</style>
