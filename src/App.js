import React, { Component } from "react";
import "./App.css";
import CSVReader from "react-csv-reader";
import { CSVLink, CSVDownload } from "react-csv";
import styled from "styled-components";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

class App extends Component {
  notify = () =>{
    toast("변경 완료 다운 받으세요", {
      position: "bottom-center",
      autoClose: 1000,
      hideProgressBar: true,
      closeOnClick: false,
      pauseOnHover: false,
      draggable: false
    });
  }
  
  state = {
    before: "",
    after: "",
    col: "",
    inputdata: [],
    filename: ""
  };
 
  render() {
    return (
      <>
        <ToastContainer />
        <Back>
          <Container>
            <CSVReader
              cssClass="react-csv-input"
              label="CSV파일 선택"
              onFileLoaded={this.handleForce}
            />
            {this.handleList()}
            <Input
              placeholder="칼럼번호"
              value={this.state.col}
              onChange={this.handleCol}
            />
            <Input
              placeholder="변경 전"
              value={this.state.before}
              onChange={this.handleBefore}
            />
            <Input
              placeholder="변경 후"
              value={this.state.after}
              onChange={this.handleAfter}
            />
            <Input
              placeholder="생성 파일명"
              value={this.state.filename}
              onChange={this.handleName}
            />
            <Button
              onClick={() => {
                this.OutputButton(
                  this.state.inputdata,
                  this.state.before,
                  this.state.after,
                  this.state.col
                );
              }}
            >
              변경하기
            </Button>
            <LickContainer>
              <CSVLink
                data={this.state.inputdata}
                filename={this.state.filename + ".csv"}
                className="buttonhi"
                target="_blank"
              >
                파일 다운로드
              </CSVLink>
            </LickContainer>
          </Container>
        </Back>
      </>
    );
  }
  handleForce = data => {
    this.setState({ inputdata: data });
  };
  handleList = () => {
    console.log(this.state.inputdata);
    var i = 0;
    if (this.state.inputdata.length !== 0) {
      return this.state.inputdata[0].map(datas => {
        return (
          <DataList key={i}>
            {i++}:{datas}
          </DataList>
        );
      });
    }
  };
  handleBefore = e => {
    this.setState({
      before: e.target.value
    });
  };
  handleAfter = e => {
    this.setState({
      after: e.target.value
    });
  };
  handleCol = e => {
    this.setState({
      col: e.target.value
    });
  };
  handleName = e => {
    this.setState({
      filename: e.target.value
    });
  };
  OutputButton = (data, before, after, col) => {
    for (var i = 0; i < data.length; i++) {
      if (data[i][col] === before) {
        data[i][col] = after;
      }
    }
    this.setState({
      inputdata: data
    });
    this.notify();
  };
}
const DataList = styled.div`
  height: 30px;
  width: 100%;
  border: 1px solid black;
  background-color:#ffffff;
`;
const Container = styled.div`
  height: 100%;
  width: 300px;
  margin: auto;
`;
const Input = styled.input`
  height: 50px;
  width: 100%;
  margin-top: 5px;
`;
const LickContainer = styled.div`
  height: 40px;
  width: 150px;
  margin: auto;
  text-align: center;
  justify-content: center;
`;
const Button = styled.button`
  height: 40px;
  width: 150px;
  display: block;
  margin: auto;
  font-size: 16px;
  margin-top: 5px;
`;
const Back = styled.div`
  background-image: linear-gradient(to bottom right, #989ade, #5f6ccc);
  height: 100%;
  width: 100%;
`;
export default App;
