import React from 'react';
import {Button, Form, Input,} from 'antd';
const { TextArea } = Input;

class  ReleaseForm extends React.Component{
    onSubmit = values => {
        console.log(values);
        debugger;
        console.log('Received values of form: ', values);
   };
    render(){
        return(
            <Form onFinish={this.onSubmit}>
                <Form.Item
                    label="任务名"
                    name="title"
                    rules={[{ required: true, message: '请输入任务的标题!' }]}
                >
                    <Input
                        placeholder="任务的关键字"
                    />

                </Form.Item>


                <Form.Item
                    label="任务描述"
                    name="description"
                    rules={[{ required: true, message: '请输入任务的具体描述!' }]}
                >
                    <TextArea
                        placeholder="0/50~300"
                        autoSize={{ minRows: 3, maxRows: 5 }}
                    />
                </Form.Item>

                <Form.Item
                    label="任务最低预算"
                    name="lower_payment"
                    rules={[
                        { required: true, message: '请输入最低任务预算!' },
                        ({ getFieldValue }) => ({
                            validator(rule, value) {
                                let high=getFieldValue("higher_budget");
                                if (!value ||  (!high||value<=high)) {
                                    return Promise.resolve();
                                }
                                return Promise.reject('请输入小于最高预算的数字');
                            },
                        }),
                    ]}
                >
                    <Input prefix="￥" suffix="RMB" type="number"/>
                </Form.Item>

                <Form.Item
                    label="任务最高预算"
                    name="higher_payment"
                    rules={[
                        { required: true, message: '请输入最高任务预算!' },
                        ({ getFieldValue }) => ({
                            validator(rule, value) {
                                let low=getFieldValue("lower_budget");
                                if (!value ||  (!low||value>=low)) {
                                    return Promise.resolve();
                                }
                                return Promise.reject('请输入大于最最低预算的数字');
                            },
                        }),
                    ]}
                >
                    <Input prefix="￥" suffix="RMB" type="number" />
                </Form.Item>

                <Form.Item>
                    <Button type="primary" htmlType="submit" className="form-button">
                        提交
                    </Button>
                </Form.Item>
            </Form>
        );

    }
}

export default ReleaseForm;