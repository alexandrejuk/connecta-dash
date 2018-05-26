import React, { Component } from 'react';
import { withRequest } from '../../../Requests'
import { ProductForm } from '../../../Containers/Products/ProductForm'
import { Upload, Icon, message } from 'antd';

import './styles.css';

class CreateProduct extends Component {
  constructor(props){
    super(props);
    this.state = {
      products: [],
      atendimentos: [],
      loading: false,
    }
    this.loadProducts();
    console.log(props)
  }

  loadProducts(){
    // this.props
    //   .request.get('/products')
    //   .then(products => this.setState({ products }))
      // this.props
      // .request.get('/atendimentos?skip=0&limit=10')
      // .then(({atendimentos}) => this.setState({ atendimentos }))
  }

  handleChange = (info) => {
    console.dir(info)
    if (info.file.status === 'uploading') {
      this.setState({ loading: true });
      return;
    }
    if(info.file.status === 'error'){
      this.setState({ loading: false });
      return;
    }
    if (info.file.status === 'done') {
      // Get this url from response in real world.
      this.setState({ imageUrl: info.file.response });
    }
  }

  handleFormSubmit = (data, errors) => {
    this.props
      .request.post('/products', data)
      .then(res => console.log(res))
      .catch(error => console.error('error ======>',error))
  }

  render = () => {
    const uploadButton = (
      <div>
        <Icon type={this.state.loading ? 'loading' : 'plus'} />
        <div className="ant-upload-text">Upload</div>
      </div>
    );
    const imageUrl = this.state.imageUrl;
   return (
     <div>
       <div style={{
          width: '128px',
          height: '128px',
          maxWidth: '128px',
        }}>

          <Upload
            name="avatar"
            listType="picture-card"
            className="avatar-uploader"
            showUploadList={false}
            name="file"
            action="http://localhost:5000/upload"
            onChange={this.handleChange}
          >
            {imageUrl ? <img src={imageUrl} alt="avatar" /> : uploadButton}
          </Upload>
       </div>

       <ProductForm onSubmit={this.handleFormSubmit}/>
    </div>
   )
  }
}

export default withRequest(CreateProduct);