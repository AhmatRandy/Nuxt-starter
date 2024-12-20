<script setup lang="ts">
const showCompany = ref(false);
const accessRole = ref("Enterprise Admin");
const loading_enterprise = ref(false);
const loading_merch = ref(false);
const loading_app = ref(false);
const loadingTotalUsers = ref(false);
const summaryLevel = ref("all");
</script>

<template>
  <div class="">
    <div class="w-full">
      <div v-if="showCompany" class="text-xl font-medium">enterprise</div>
      <div class="px-3 my-5">
        <div v-if="accessRole === 'Enterprise Admin'">
          <div class="bg-slate-600 sm:grid-cols-3">
            <div class="sm:col-span-2">
              <h1 class="flex-auto font-medium text-red-200 text-xl">
                Summary
              </h1>
              <div class="my-2 text-sm">Shows your enterprise data</div>
              <div class="grid md:grid-cols-2 gap-5 my-5 bg-red-400">
                <dashboard-summary-card
                  title="Total Merchant"
                  description="Shows the used and total amount of merchant quota"
                  class="bg-brand-50"
                  :is-static="true"
                >
                  <dashboard-summary-card-type-counter
                    :another-value="true"
                    :second-source="{
                      enterprise_id: `Enterprise's target uuid`,
                      merchant: `Merchant's target uuid`,
                      application_id: `Application's target uuid`,
                      feature_id: `Feature's target uuid`,
                      data_item: 'quota_merchant',
                      data_item_endpoint: '/manage/v1/enterprise/total/quota',
                    }"
                    :data-source="{
                      enterprise_id: `Enterprise's target uuid`,
                      merchant: `Merchant's target uuid`,
                      application_id: `Application's target uuid`,
                      feature_id: `Feature's target uuid`,
                      data_item: 'merchant.total',
                      data_item_endpoint: '/merchant/v1/stats/summary',
                      data_item_endpoint_params: {
                        period: 'all',
                      },
                    }"
                  />
                </dashboard-summary-card>
                <dashboard-summary-card
                  title="Total Application"
                  description="Shows the used and total amount of application quota"
                  class="bg-brand-50"
                  :is-static="true"
                >
                  <dashboard-summary-card-type-counter
                    :another-value="true"
                    :second-source="{
                      enterprise_id: `Enterprise's target uuid`,
                      merchant: `Merchant's target uuid`,
                      application_id: `Application's target uuid`,
                      feature_id: `Feature's target uuid`,
                      data_item: 'quota_application',
                      data_item_endpoint: '/manage/v1/enterprise/total/quota',
                    }"
                    :data-source="{
                      enterprise_id: `Enterprise's target uuid`,
                      merchant: `Merchant's target uuid`,
                      application_id: `Application's target uuid`,
                      feature_id: `Feature's target uuid`,
                      data_item: 'application.total',
                      data_item_endpoint: '/merchant/v1/stats/summary',
                      data_item_endpoint_params: {
                        period: 'all',
                      },
                    }"
                  />
                </dashboard-summary-card>
              </div>
            </div>
            <div class="p-10 mb-5">
              <span class="font-bold text-2xl text-black mb-5">
                Don't forget to always check your applications balance!
              </span>
              <!-- <ButtonSubmit>Check here</ButtonSubmit> -->
              <div class="image-warning"></div>
            </div>
          </div>
        </div>
        <div v-else-if="accessRole === 'Merchant Admin'">
          <div class="section-component sm:grid-cols-2 lg:grid-cols-3">
            <div class="lg:col-span-2">
              <h1 class="flex-auto font-medium text-gray-700 text-xl">
                Summary
              </h1>
              <div class="my-5">
                <dashboard-summary-card
                  title="Total Application"
                  description="Show the used and total ammount of application quota"
                  class="bg-brand-50"
                  :is-static="true"
                >
                  <dashboard-summary-card-type-counter
                    :another-value="true"
                    :second-source="{
                      enterprise_id: `Enterprise's target uuid`,
                      merchant: `Merchant's target uuid`,
                      application_id: `Application's target uuid`,
                      feature_id: `Feature's target uuid`,
                      data_item: 'quota_application',
                      data_item_endpoint: '/manage/v1/enterprise/total/quota',
                    }"
                    :data-source="{
                      enterprise_id: `Enterprise's target uuid`,
                      merchant: `Merchant's target uuid`,
                      application_id: `Application's target uuid`,
                      feature_id: `Feature's target uuid`,
                      data_item: 'application.total',
                      data_item_endpoint: '/merchant/v1/stats/summary',
                      data_item_endpoint_params: {
                        period: 'all',
                      },
                    }"
                  />
                </dashboard-summary-card>
              </div>
            </div>
            <div class="balance-warning p-10 mb-5">
              <div class="font-bold text-2xl text-white mb-5">
                Don't forget to always check your applications balance!
              </div>
              <!-- <ButtonSubmit>Check here</ButtonSubmit> -->
              <div class="image-warning"></div>
            </div>
          </div>
        </div>
        <div v-else>
          <div class="flex justify-between">
            <h1 class="flex-auto font-medium text-gray-700 text-xl">Summary</h1>
            <!-- <FormSelect
          v-model="summaryLevel"
          name="dataProvider"
          class="border-gray-300 font-medium mr-3 rounded-xl text-sm text-[#344565] w-40"
          placeholder="This Month"
          :options="summaryOptions"
          /> -->
          </div>
          <div class="my-2 text-sm">Shows your enterprise data</div>
          <div class="section-component sm:grid-cols-3">
            <dashboard-summary-card
              title="Total Enterprise"
              description="Amount of enterprise"
              class="bg-brand-50"
              :is-static="true"
            >
              <div v-if="loading_enterprise" class="mt-6">
                <div
                  class="placeholder-block placeholder-wave is-loading"
                ></div>
              </div>
              <dashboard-summary-card-type-counter
                :data-source="{
                  enterprise_id: `Enterprise's target uuid`,
                  merchant: `Merchant's target uuid`,
                  application_id: `Application's target uuid`,
                  feature_id: `Feature's target uuid`,
                  data_item: 'enterprise.total',
                  data_item_endpoint: '/merchant/v1/stats/summary',
                  data_item_endpoint_params: {
                    period: summaryLevel,
                  },
                }"
              />
            </dashboard-summary-card>
            <dashboard-summary-card
              title="Total Merchant"
              description="Amount of merchant"
              class="bg-brand-50"
              :is-static="true"
            >
              <div v-if="loading_merch" class="mt-6">
                <div
                  class="placeholder-block placeholder-wave is-loading"
                ></div>
              </div>
              <dashboard-summary-card-type-counter
                v-else
                :data-source="{
                  enterprise_id: `Enterprise's target uuid`,
                  merchant: `Merchant's target uuid`,
                  application_id: `Application's target uuid`,
                  feature_id: `Feature's target uuid`,
                  data_item: 'merchant.total',
                  data_item_endpoint: '/merchant/v1/stats/summary',
                  data_item_endpoint_params: {
                    period: summaryLevel,
                  },
                }"
              />
            </dashboard-summary-card>
            <dashboard-summary-card
              title="Total Application"
              description="Amount of application"
              class="bg-brand-50"
              :is-static="true"
            >
              <div v-if="loading_app" class="mt-6">
                <div
                  class="placeholder-block placeholder-wave is-loading"
                ></div>
              </div>
              <dashboard-summary-card-type-counter
                v-else
                :data-source="{
                  enterprise_id: `Enterprise's target uuid`,
                  merchant: `Merchant's target uuid`,
                  application_id: `Application's target uuid`,
                  feature_id: `Feature's target uuid`,
                  data_item: 'application.total',
                  data_item_endpoint: '/merchant/v1/stats/summary',
                  data_item_endpoint_params: {
                    period: summaryLevel,
                  },
                }"
              />
            </dashboard-summary-card>
          </div>
        </div>

        <div class="section-component grid-cols-3">
          <dashboard-summary-card
            title="Total User"
            description="Shows your total user count"
            class="col-span-3"
            style="padding-bottom: 2rem"
            :is-static="true"
          >
            <div class="flex flex-wrap items-center gap-3 mt-4 mb-2">
              <span class="text-sm">Year</span>
              <!-- <FormSelect
                v-model="year"
                name="total-users"
                class="border-brand-500 font-medium rounded-xl text-sm text-[#344565] w-40"
                :allow-empty="false"
                placeholder=""
                :options="years"
              /> -->
              <div
                class="border-brand-500 font-medium rounded-xl text-sm text-[#344565] w-40"
              >
                <!-- <select
                  v-model="year"
                  class="select-gen"
                  :class="
                    totalUsersSeries.length === 0 && !loadingTotalUsers
                      ? 'select-error'
                      : 'select-available'
                  "
                >
                  <option v-for="(item, idx) in years" :key="idx" :value="item">
                    {{ item }}
                  </option>
                </select> -->
              </div>
            </div>
            <small class="text-xs"
              >Max. Displayed applications are 5 applications</small
            >
            <div
              v-if="loadingTotalUsers"
              class="placeholder-block placeholder-wave is-loadings h-20"
            />
            <div v-else>
              <div>
                <!-- <EmptyData
                  custom-title="empty-state.description"
                  custom-desc="empty-state.title"
                /> -->
              </div>
              <dashboard-summary-card-type-chart :x-axis-categories="['']" />
              <div class="text-center text-sm -mt-8"></div>
            </div>
          </dashboard-summary-card>
          <!-- <dashboard-summary-card -->
          <!--   title="Recent Accessed User" -->
          <!--   :is-static="true" -->
          <!-- > -->
          <!--   <dashboard-summary-card-type-table -->
          <!--     :with-query="false" -->
          <!--     :data-source="{ -->
          <!--       enterprise_id: `Enterprise's target uuid`, -->
          <!--       merchant: `Merchant's target uuid`, -->
          <!--       application_id: `Application's target uuid`, -->
          <!--       feature_id: `Feature's target uuid`, -->
          <!--       data_item: 'application.total', -->
          <!--       data_item_endpoint: '/manage/v1/most/used/features', -->
          <!--       data_item_endpoint_params: { -->
          <!--         page: 1, -->
          <!--         per_page: 5, -->
          <!--         enterprise_id: '9ab31d84-c6d8-4f95-97cc-af10729fed01', -->
          <!--       }, -->
          <!--       table_identifiers: [ -->
          <!--         { -->
          <!--           column_name: 'Feature', -->
          <!--           target_data: 'feature_name', -->
          <!--         }, -->
          <!--         { -->
          <!--           column_name: 'Application', -->
          <!--           target_data: 'application_name', -->
          <!--         }, -->
          <!--         { -->
          <!--           column_name: 'Total', -->
          <!--           target_data: 'total', -->
          <!--         }, -->
          <!--       ], -->
          <!--     }" -->
          <!--   /> -->
          <!-- </dashboard-summary-card> -->
        </div>
        <div class="section-component lg:grid-cols-2">
          <dashboard-summary-card
            title="Submitted Data"
            :is-static="true"
            description="Shows the data submitted by the users"
          >
            <div class="flex flex-col justify-between h-full">
              <!-- <dashboard-action-logs-compare
                :account-applications="accountApplications.slice(0, 2)"
                :is-totally-empty="isTotallyEmptyActionLogsSeries"
                :access-role="accessRole"
                @update-series="actionLogsSeries = $event"
              /> -->
              <!-- <dashboard-summary-card-type-chart
                v-if="!isTotallyEmptyActionLogsSeries"
                :x-axis-categories="['Success Register Application']"
                :data-series="actionLogsSeries"
              /> -->
              <!-- <EmptyData
                v-else
                custom-title="empty-state.description"
                custom-desc="empty-state.title"
                class="mt-8"
              /> -->
            </div>
          </dashboard-summary-card>
          <dashboard-summary-card
            title="Recent Accessed User"
            :is-static="true"
            description="Shows your recent user based on the Additional Data Form feature"
          >
            <dashboard-summary-card-type-list
              :account-applications="[]"
              :access-role="accessRole"
            />
          </dashboard-summary-card>
          <!-- <dashboard-summary-card title="Most Used Feature" :is-static="true">
            <dashboard-summary-card-type-table
              :with-query="false"
              :data-source="{
                enterprise_id: `Enterprise's target uuid`,
                merchant: `Merchant's target uuid`,
                application_id: `Application's target uuid`,
                feature_id: `Feature's target uuid`,
                data_item: 'application.total',
                data_item_endpoint: '/manage/v1/most/used/features',
                data_item_endpoint_params: {
                  page: 1,
                  per_page: 5,
                  enterprise_id: '9ab31d84-c6d8-4f95-97cc-af10729fed01',
                },
                table_identifiers: [
                  {
                    column_name: 'Feature',
                    target_data: 'feature_name',
                  },
                  {
                    column_name: 'Application',
                    target_data: 'application_name',
                  },
                  {
                    column_name: 'Total',
                    target_data: 'total',
                  },
                ],
              }"
            />
          </dashboard-summary-card> -->
        </div>
        <div class="section-component">
          <dashboard-summary-card
            title="Application List"
            :is-static="true"
            description="Shows your most recent 5 applications"
          >
            <dashboard-summary-card-type-table
              :with-query="false"
              :data-source="{
                enterprise_id: `Enterprise's target uuid`,
                merchant: `Merchant's target uuid`,
                application_id: `Application's target uuid`,
                feature_id: `Feature's target uuid`,
                data_item: 'application.total',
                data_item_endpoint: '/manage/v1/dashboard/applications',
                data_item_endpoint_params: {
                  page: 1,
                  per_page: 5,
                  order_type: 'desc',
                },
                table_identifiers: [
                  {
                    column_name: 'Enterprise Name',
                    target_data: 'enterprise',
                  },
                  {
                    column_name: 'Merchant',
                    target_data: 'merchant',
                  },
                  {
                    column_name: 'Application',
                    target_data: 'name',
                  },
                  {
                    column_name: 'Created At',
                    target_data: 'created_at',
                    format: 'date',
                  },
                  {
                    column_name: 'Updated At',
                    target_data: 'updated_at',
                    format: 'date',
                  },
                ],
              }"
            />
          </dashboard-summary-card>
        </div>
      </div>
    </div>
  </div>
</template>

<style lang="scope"></style>
