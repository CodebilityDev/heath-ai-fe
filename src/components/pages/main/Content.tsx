import { useEffect, useState, useRef } from "react";
import { useRecoilState } from 'recoil';
import Datepicker from "react-tailwindcss-datepicker";
import IconMessage from "@svgs/IconMessage";
import langSnippet from "@utils/LangSnippet";
import CheckButtons from "@components/core/CheckButtons";
import CarrierModal from "@components/pages/main/modals/CarrierModal"
import CheckBox from "@components/core/CheckBox";
import { settingAtom } from '@state/Setting';
import { appStateAtom } from '@state/AppState';
import { SettingInterface } from "@types/Setting";
import { AppStateInterface } from "@types/AppState";
import Select from "react-tailwindcss-select";

import API from "@utils/API";

const Content = () => {
  const [appState, setAppState] = useRecoilState<AppStateInterface>(appStateAtom)
  const [setting, setSetting] = useRecoilState<SettingInterface>(settingAtom);
  const [apiClient, setApiClient] = useState<any>(null);
  const [gptResponse, setGptResponse] = useState('');
  const [resize, setResize] = useState(false);
  const [users, setUsers] = useState<any>([]);
  const [selectedUsers, setSelectedUsers] = useState<any>([]);
  const [date, setDate] = useState({
    startDate: new Date(),
    endDate: new Date()
  })
  const [carrierModal, setCarrierModal] = useState(false)

  const responseRef = useRef(null);

  useEffect(() => {
    setApiClient(new API(''))
    window.addEventListener('resize', () => {
      setResize(!resize)
    })
    if (appState.connected) {
      setAppState({
        ...appState,
        isLoading: true
      })
      apiClient
        .get('api/v1/users')
        .then((res: any) => {
          setUsers([{ 'value': '_all', 'label': 'Select All' }, ...res.data])
        })
        .catch((error: any) => {
          console.log('error ====>', error)
        })
        .finally(() => {
          setAppState({
            ...appState,
            isLoading: false
          })
        })
    }
  }, [appState.connected])

  useEffect(() => {
    const gptResponseForm = responseRef.current
    if (gptResponseForm) {
      gptResponseForm.style.height = 'auto';
      gptResponseForm.style.height = `${gptResponseForm.scrollHeight}px`
    }

  }, [gptResponse, resize])

  const handleUsersChange = (updatedUsers: any) => {
    console.log('selected users', updatedUsers)
    if (!updatedUsers) {
      setSelectedUsers([]);
      return;
    }

    const isAllSelected = updatedUsers.some((u: any) => u.value === '_all');
    if (isAllSelected) {
      setSelectedUsers(users.filter((u: any) => u.value !== '_all'));
    } else {
      setSelectedUsers(updatedUsers);
    }
  };


  const handleChange = (event: any, type: string) => {
    if (type == 'plan') {
      setSetting({
        ...setting,
        [type]: setting.plan == event.target.outerText ? '' : event.target.outerText
      })
    } else if (type == 'recommendedPlan') {
      let idx = langSnippet.recommendedPlan.options.findIndex((item: string) => item == event.target.outerText)
      setSetting({
        ...setting,
        [type]: idx
      })
    } else {
      setSetting({
        ...setting,
        [type]: event.target.value
      })
    }
  }

  const handleDobChange = (date: any, e: any) => {
    setSetting({
      ...setting,
      dob: date.startDate
    })

  }

  const onCarrierModalClose = () => {
    setCarrierModal(false);
  }

  const onCarrierSave = (items: string[]) => {
    setCarrierModal(false);
  }

  const getMessage = (e: any, mode: boolean) => {
    e.preventDefault();
    setAppState({
      ...appState,
      isLoading: true
    })
    const apiClient = new API('')
    apiClient.post('gpt/ask', { ...setting, users: mode ? [...selectedUsers] : [] })
      .then((response: any) => {
        setGptResponse(response.message)
      })
      .catch((error: any) => {
        console.log('error', error)
      })
      .finally(() => {
        setAppState({
          ...appState,
          isLoading: false
        })
      })
  }

  return (
    <div className='content-content'>
      <div className='header-container'>
        <p className='header-title'>Federal<span className='text-2xl text-primary'>Plans</span></p>
      </div>
      <div className='form-container'>
        <div className='form-content'>
          <div className="w-full">
            <p className='form-label'>{langSnippet.mission.label}</p>
            <textarea rows={6} placeholder={langSnippet.mission.placeholder} className='form-input' value={setting.mission} onChange={(e) => handleChange(e, 'mission')} >
            </textarea>
          </div>
          <div className="w-full">
            <p className='form-label'>{langSnippet.tone.label}</p>
            <input type='text' placeholder={langSnippet.tone.placeholder} className="form-input" value={setting.tone} onChange={(e) => handleChange(e, 'tone')} />
          </div>
          <div className="w-full">
            <p className='form-label'>{langSnippet.plan.label}</p>
            <CheckButtons
              options={langSnippet.plan.options}
              value={setting.plan}
              type='plan'
              handleChange={handleChange}
            />
          </div>
          <div className="w-full">
            <p className='form-label'>{langSnippet.carrier.label}</p>
            <div className="form-carrier-container">
              <div className={setting.carriers.length == 0 ? 'display-none' : 'checked-carriers-container'}>
                {
                  langSnippet.carrier.options.map((carrier: string, idx: number) => {
                    if (setting.carriers.includes(carrier)) {
                      return (
                        <CheckBox
                          checked={true}
                          label={carrier}
                          readOnly={true}
                          handleChange={() => { }}
                          key={idx}
                        />
                      )
                    }
                  })
                }
              </div>
              <button className="btn-primary-lg btn-outlined" onClick={(e: any) => { e.preventDefault(); setCarrierModal(true) }}>+ Add Carriers</button>
            </div>
          </div>
          <div className="w-full">
            <p className='form-label'>{langSnippet.recommendedPlan.label}</p>
            <CheckButtons
              options={langSnippet.recommendedPlan.options}
              value={langSnippet.recommendedPlan.options[setting.recommendedPlan]}
              type='recommendedPlan'
              handleChange={handleChange}
            />
          </div>
          <div className="w-full">
            <p className='form-label'>{langSnippet.chatbotQuestion.label}</p>
            <input type='text' placeholder={langSnippet.chatbotQuestion.placeholder} value={setting.chatbotQuestion} onChange={(e) => handleChange(e, 'chatbotQuestion')} className="form-input" />
          </div>
          <div className="w-full">
            <p className='form-label'>{langSnippet.summary.label}</p>
            <input type='text' placeholder={langSnippet.summary.placeholder} value={setting.summary} onChange={(e) => handleChange(e, 'summary')} className="form-input" />
          </div>
          <div className="w-full">
            <p className='form-label'>{langSnippet.exMessage.label}</p>
            <textarea rows={6} placeholder={langSnippet.exMessage.placeholder} value={setting.exMessage} onChange={(e) => handleChange(e, 'exMessage')} className='form-input'>
            </textarea>
          </div>
          <div className="inline-form-container">
            <div className='inline-form-element'>
              <p className="mb-2">First name</p>
              <input type='text' placeholder='Ex: John' value={setting.firstName} onChange={(e) => handleChange(e, 'firstName')} className="form-input" />
            </div>
            <div className='inline-form-element'>
              <p className="mb-2">Last name</p>
              <input type='text' placeholder='Ex: John' value={setting.lastName} onChange={(e) => handleChange(e, 'lastName')} className="form-input" />
            </div>
          </div>
          <div className="inline-form-container">
            <div className='inline-form-element'>
              <p className="mb-2">Date of Birth</p>
              <Datepicker
                value={{ startDate: setting.dob, endDate: setting.dob }}
                onChange={handleDobChange}
                asSingle={true}
                useRange={false}
                inputClassName="form-input"
                placeholder={'Select date'}
              />
            </div>
            <div className='inline-form-element'>
              <p className="mb-2">income</p>
              <select placeholder='0-10k/year' onChange={(e) => handleChange(e, 'income')} className="form-input hci-select">
                <option value={0}>0-10k/year</option>
                <option value={1}>11-30k/year</option>
              </select>
            </div>
          </div>
          <div className="inline-form-container">
            <div className='inline-form-element'>
              <p className="mb-2">Number of Dependents</p>
              <select placeholder='0' onChange={(e) => handleChange(e, 'dependents')} className="form-input hci-select">
                <option value={0}>0</option>
                <option value={1}>1</option>
                <option value={2}>2</option>
                <option value={3}>3</option>
                <option value={4}>4</option>
              </select>
            </div>
            <div className='inline-form-element'>
              <p className="mb-2">Postal Code</p>
              <input required type='text' placeholder='123456' value={setting.zipCode} onChange={(e) => handleChange(e, 'zipCode')} className="form-input" />
            </div>
          </div>
          <div className="divider-x"></div>
          <div className="form-submit-container">
            <div className="flex flex-1 w-full relative">
              <textarea rows={1} ref={responseRef} value={gptResponse} onChange={(e) => { setGptResponse(e.target.value) }} placeholder="Hi how may i help you, please enter..." className="form-input-primary resize-none overflow-y-hidden" />
              <div className='absolute top-4 left-4'>
                <IconMessage />
              </div>
            </div>
            <div className="flex md:w-auto w-full">
              <button className='btn-submit' onClick={(e: any) => getMessage(e, false)}>Test welcome message</button>
            </div>
          </div>
          <div className="divider-x"></div>
          <div className="form-submit-container justify-center mb-[150px]">
            <div className="flex flex-1 w-full relative">
              <div className="inline-form-element">
                <p className="mb-2">Users Select</p>
                <div className="w-full flex flex-col md:flex-row items-center">
                  <div className="flex flex-1 w-full relative md:mr-4 mb-4 md:mb-0">
                    <Select
                      isClearable={true}
                      primaryColor={"violet"}
                      value={selectedUsers}
                      isMultiple={true}
                      onChange={handleUsersChange}
                      options={users}
                      placeholder={'No users selected'}
                      classNames={{
                        'menuButton': (value: any) => {
                          return 'multi-select-menu-button'
                        },
                        'menu': 'multi-select-menu',
                        'list': 'multi-select-list',
                        'tagItem': (value: any) => {
                          return 'multi-select-tag-item'
                        }
                      }}
                    />
                  </div>
                  <div className="flex md:w-auto w-full h-full items-center">
                    <button className='btn-submit' onClick={(e: any) => getMessage(e, true)} disabled={!appState.connected || selectedUsers.length == 0}>Text message to users</button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className='footer-container'>
        <p className='footer-text'>© 2024 Obamacare AI. All Rights Reserved.</p>
      </div>
      <CarrierModal
        className="w-full"
        open={carrierModal}
        selectedCarriers={setting.carriers}
        options={langSnippet.carrier.options}
        onClose={onCarrierModalClose}
        onSave={onCarrierSave}
      />
    </div>
  )
}

export default Content;