import { Modal } from 'antd';
import React, { memo } from 'react';
import propTypes from 'prop-types'

function ThemeDialog(props) {
  // props/state
  const {controlShow, title, handleOk, handleCancel} = props

  return (
    <>
      <Modal
        title={title}
        visible={controlShow}
        onOk={handleOk}
        onCancel={handleCancel}
      >
        {props.children}
      </Modal>
    </>
  );
};

// 校验传递的props
ThemeDialog.propTypes = {
  controlShow: propTypes.bool.isRequired,
  title: propTypes.string
}

// 组件默认的props
ThemeDialog.defaultProps = {
  controlShow: false,
  title: 'hello dialog'
}

export default memo(ThemeDialog)