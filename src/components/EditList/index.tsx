import { FC, useState } from 'react'
import { useNavigate } from 'react-router-dom'
import moment from 'moment'
import {
  CascadePicker,
  CascadePickerOption,
  DatePicker,
  List,
  Picker
} from 'antd-mobile'
import {
  PickerColumn,
  PickerValue
} from 'antd-mobile/es/components/picker-view'
import {
  FaceRecognitionOutline,
  EnvironmentOutline,
  QuestionCircleOutline,
  SmileOutline,
  TagOutline
} from 'antd-mobile-icons'
import { transformData } from '@/utils/transformData'
import cityData from '@/assets/data/cityOptions.json'

const basicColumns:
  | PickerColumn[]
  | ((value: PickerValue[]) => PickerColumn[]) = [
  [
    {
      label: '男',
      value: '男',
      key: 'man'
    },
    {
      label: '女',
      value: '女',
      key: 'woman'
    },
    {
      label: '不展示',
      value: '不展示',
      key: 'none'
    }
  ]
]

const options: CascadePickerOption[] = transformData(cityData)

// 编辑列表
const EditList: FC = () => {
  const navigate = useNavigate()
  const [visibleGender, setVisibleGender] = useState(false)
  const [visibleDate, setVisibleDate] = useState(false)
  const [visibleCascade, setVisibleCascade] = useState(false)

  const [value] = useState<(string | null)[]>(['男'])

  const [editProps, setEditProps] = useState([
    {
      id: 1,
      icon: <SmileOutline />,
      title: '名字',
      text: '猫九'
    },
    {
      id: 2,
      icon: <TagOutline />,
      title: '简介',
      text: '在午夜时分相遇，寻找真实的自己'
    },
    {
      id: 3,
      icon: <QuestionCircleOutline />,
      title: '性别',
      text: '男'
    },
    {
      id: 4,
      icon: <EnvironmentOutline />,
      title: '地区',
      text: '江西省 赣州市'
    },
    {
      id: 5,
      icon: <FaceRecognitionOutline />,
      title: '生日',
      text: '不展示'
    }
  ])

  const now = new Date()
  const minDate = moment().subtract(60, 'years')

  const handelClick = (id: number) => {
    console.log(id)
    switch (id) {
      case 1:
        navigate('/editName')
        break
      case 2:
        navigate('/editDescription')
        break
      case 3:
        setVisibleGender(true)
        break
      case 4:
        setVisibleCascade(true)
        break
      case 5:
        setVisibleDate(true)
        break
    }
  }

  const confirmSelectGender = (value: any) => {
    setEditProps((preProps) =>
      preProps.map((item) =>
        item.id === 3 ? { ...item, text: value as string } : item
      )
    )
  }

  const confirmSelectDate = (value: string) => {
    setEditProps((preProps) =>
      preProps.map((item) => (item.id === 5 ? { ...item, text: value } : item))
    )
  }

  const confirmSelectCity = (value: PickerValue[]) => {
    setEditProps((preProps) =>
      preProps.map((item) =>
        item.id === 4
          ? {
              ...item,
              text:
                value[1] !== '市辖区'
                  ? `${value[0]} ${value[1]} ${
                      value[2] === '市辖区' ? '' : value[2]
                    }`
                  : `${value[0]} ${value[2]}`
            }
          : item
      )
    )
  }

  return (
    <>
      {editProps.map((item) => {
        return (
          <List key={item.id}>
            <List.Item prefix={item.icon} onClick={() => handelClick(item.id)}>
              <span style={{ fontSize: 16 }}>{item.title}</span>
              <span
                style={{
                  marginLeft: 15,
                  transform: 'translateY(8px)',
                  width: 250,
                  fontWeight: 500,
                  display: 'inline-block',
                  textAlign: 'center',
                  overflow: 'hidden',
                  textOverflow: 'ellipsis',
                  whiteSpace: 'nowrap'
                }}
              >
                {item.text}
              </span>
            </List.Item>
          </List>
        )
      })}
      <Picker
        columns={basicColumns}
        visible={visibleGender}
        onClose={() => {
          setVisibleGender(false)
        }}
        value={value}
        onConfirm={(value) => confirmSelectGender(value[0])}
      />
      <DatePicker
        title="时间选择"
        visible={visibleDate}
        onClose={() => {
          setVisibleDate(false)
        }}
        max={now}
        min={minDate.toDate()}
        onConfirm={(val) => {
          const date = moment(val).format('YYYY-MM-DD')
          confirmSelectDate(date)
        }}
      />
      <CascadePicker
        title="级联选择"
        options={options}
        visible={visibleCascade}
        onClose={() => {
          setVisibleCascade(false)
        }}
        onConfirm={(val) => {
          confirmSelectCity(val)
        }}
      />
    </>
  )
}

export default EditList
