/*
 * Licensed to the Apache Software Foundation (ASF) under one or more
 * contributor license agreements.  See the NOTICE file distributed with
 * this work for additional information regarding copyright ownership.
 * The ASF licenses this file to You under the Apache License, Version 2.0
 * (the "License"); you may not use this file except in compliance with
 * the License.  You may obtain a copy of the License at
 *
 *    http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
import { computed } from 'vue'
import { useI18n } from 'vue-i18n'
import { useCustomParams} from '.'
import type { IJsonItem } from '../types'

export function useDatacenter(model: { [field: string]: any }): IJsonItem[] {
  const { t } = useI18n()
  return [
    {
      type: 'input',
      field: 'datacenterTaskId',
      name: '任务标识',
      value: model.datacenterTaskId,
      props: {
        placeholder: '请输入任务标识'
      }
    },
    {
      type: 'input',
      field: 'datacenterTaskType',
      name: '任务类型',
      value: model.datacenterTaskType,
      props: {
        placeholder: '请输入任务类型'
      }
    },
    ...useCustomParams({ model, field: 'localParams', isSimple: false })
  ]
}

