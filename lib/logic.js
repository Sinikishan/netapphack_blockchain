/*
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */

'use strict';
/**
 * Write your transction processor functions here
 */

/**
 * Shipping
 * @param {org.netapp.hack.Shipping} sp
 * @transaction
 */

async function Shipping(sp) {
    let assetReg = await getAssetRegistry('org.netapp.hack.Shipment');
     let old_dimension = sp.shipment.dimension;
     let old_weight = sp.shipment.weight;
     let old_status = sp.shipment.status;
 
 if(old_dimension != sp.dimension || old_weight != sp.weight)
 {
   sp.shipment.status = "Some Damage Found";
 }
 
  else if(old_dimension == sp.dimension && old_weight == sp.weight)
 {
   sp.shipment.status = "GOOD";
 }
 
 let estimated_del_time = sp.estimated_del_time;
 let actual_del_time = sp.actual_del_time;
 
 if(estimated_del_time <= actual_del_time)
 {
 
    sp.delivery_person.reward = "Plus 1" 
 }
 
 
   
      sp.shipment.shipper = sp.shipper ;
    await assetReg.update(sp.shipment);
 
 }

