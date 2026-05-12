interface Props {
  isShow: boolean;
}

const DropDownList = ({ isShow }: Props) => {

  return (isShow &&
    <div>
      drop-down-list
    </div>
  )
}

export default DropDownList;