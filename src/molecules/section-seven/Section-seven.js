import React, { Component } from 'react';
import { HashLink as Link } from 'react-router-hash-link';
import ScrollAnimation from 'react-animate-on-scroll';
import axios from 'axios';
import './Section-seven.scss'

class SectionSeven extends Component {
    constructor(){
        super()
        this.state = {
          showMore: false,
          applicationForm: false,
          copyEmail: false,
          name: '',
          linkedin: '',
          cv: null,
          formValidation: false,
        }
    }

    onFileChange = event => {
    this.setState({ cv: event.target.files[0] });
    };

    handleInput = e => {
    const input = e.target
    this.setState({
        [input.name]: input.value
    })
    this.formValidation();
    }

    formValidation = () => {
        if (this.state.name.length > 3 && this.state.cv.name.length > 0){
            this.setState({ formValidation: true });
        }
    }

    handleSubmit = (event) => {
        event.preventDefault();
        if (this.state.formValidation === true) {
            const formData = new FormData();

            formData.set('name', this.state.name);
            formData.set('linkedin', this.state.linkedin);
            formData.append('cv', this.state.cv);
            formData.set('apiToken', 'Yzk2OWIyYjE3MWQzNDQwMmE4OWUzYzA4');

            console.log(formData)
            console.log(this.state.cv);

            axios({
                method: 'post',
                url: 'https://www.oisami.com/apply.php',
                data: formData,
            })
            .then(res => {
            console.log(res);
            console.log(res.data);
            })
            alert('Candidatura enviada com sucesso!')
            window.location.href='http://localhost:3001';
        } else {
            alert('Favor preencher corretamente')
        }
    }

    fileData = () => {
        if (this.state.cv) {
            return (
                <p className='upload-details'>Arquivo adicionado: {this.state.cv.name}</p>
            );
        } else {
            return (
                <p className='upload-details no-file'>Nenhum arquivo adicionado</p>
            );
        }
    };

    jobClick = () => {
        document.querySelector('#job').classList.remove('clickable')
    }

    showMore = () => {
        this.setState({
            showMore: true
        })
        this.jobClick()
    }

    applyButton = () => {
        this.setState({
            applicationForm: true
        })
    }
    restartCopy = () => {
        setTimeout(() => {
            const emailCopied = document.querySelector('#email-copied')
            const emailToCopy = document.querySelector('#email-to-copy')
            emailCopied.classList.remove('opened')
            emailCopied.classList.add('closed')
            emailToCopy.classList.remove('closed')
            emailToCopy.classList.add('opened')
            this.setState({
                copyEmail: false
            })
        }, 3000);
    }
    copyingEmail = () => {navigator.clipboard.writeText('recrutamento@oisami.com')}
    copyEmail = () => {
        this.setState({
            copyEmail: true
        })
        this.copyingEmail()
        this.restartCopy()
    }
    render() {
        const { showMore } = this.state
        const { applicationForm } = this.state
        const { copyEmail } = this.state
        return (
            <section id='section-seven'>
                <div className='title-wrapper'>
                    <p className='title'>vem pra sami</p>
                    <ScrollAnimation animateIn='swing'>
                        <p className='title-bold'>Nossas vagas</p>
                    </ScrollAnimation>
                </div>
                <a name='wehire'></a>
                <div className='jobs-wrapper'>
                    <div className='area'>
                        <p className='title'>Marketing & Vendas</p>
                        <ul className='jobs-list'>
                            <li className='job'>
                                <div className='job-opening'>
                                    <p className='posted'>Vaga aberta em <span>9</span> de <span>janeiro</span> de <span>2020</span></p>
                                    <p className='position'>Analista Senior de Conteúdo</p>
                                    <div>
                                        <p className='location'>São Paulo/SP</p>
                                        <p>&nbsp;&nbsp;•&nbsp;&nbsp;</p>
                                        <p className='routine'>Tempo Integral</p>
                                    </div>
                                </div>
                            </li>
                            <li className='job'>
                                <div className='job-opening'>
                                    <p className='posted'>Vaga aberta em <span>9</span> de <span>janeiro</span> de <span>2020</span></p>
                                    <p className='position'>Analista Senior de Conteúdo</p>
                                    <div>
                                        <p className='location'>São Paulo/SP</p>
                                        <p>&nbsp;&nbsp;•&nbsp;&nbsp;</p>
                                        <p className='routine'>Tempo Integral</p>
                                    </div>
                                </div>
                            </li>
                            <li className='job'>
                                <div className='job-opening'>
                                    <p className='posted'>Vaga aberta em <span>9</span> de <span>janeiro</span> de <span>2020</span></p>
                                    <p className='position'>Analista Senior de Conteúdo</p>
                                    <div>
                                        <p className='location'>São Paulo/SP</p>
                                        <p>&nbsp;&nbsp;•&nbsp;&nbsp;</p>
                                        <p className='routine'>Tempo Integral</p>
                                    </div>
                                </div>
                            </li>
                        </ul>
                    </div>
                    <div className='area'>
                        <p className='title'>Tecnologia & Produto</p>
                        <ul className='jobs-list'>
                            <li id='job' className='job clickable' onClick={() => { this.showMore() }}>
                                <div className='job-opening'>
                                    <p className='posted'>Vaga aberta em <span>9</span> de <span>janeiro</span> de <span>2020</span></p>
                                    <p className='position'>Product manager</p>
                                    <div>
                                        <p className='location'>São Paulo/SP</p>
                                        <p>&nbsp;&nbsp;•&nbsp;&nbsp;</p>
                                        <p className='routine'>Tempo Integral</p>
                                    </div>
                                    <div className={`more-info ${(showMore === true) ? 'opened' : 'closed'}`}>
                                        <div className='job-description'>
                                            <p className='title'>Descrição da vaga</p>
                                            <p className='text'>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum</p>
                                        </div>
                                        <div className='job-requirements'>
                                            <p className='title'>Requisitos</p>
                                            <ul className='text'>
                                                <li>Lorem ipsum dolor sit amet, consectetur adipiscing</li>
                                                <li>Lorem ipsum dolor sit amet, consectetur adipiscing</li>
                                                <li>Lorem ipsum dolor sit amet, consectetur adipiscing</li>
                                                <li>Lorem ipsum dolor sit amet, consectetur adipiscing</li>
                                                <li>Lorem ipsum dolor sit amet, consectetur adipiscing</li>
                                            </ul>
                                        </div>
                                        <div className='job-benefits'>
                                            <p className='title'>O que oferecemos?</p>
                                            <ul className='text'>
                                                <li>Lorem ipsum dolor sit amet, consectetur adipiscing</li>
                                                <li>Lorem ipsum dolor sit amet, consectetur adipiscing</li>
                                                <li>Lorem ipsum dolor sit amet, consectetur adipiscing</li>
                                                <li>Lorem ipsum dolor sit amet, consectetur adipiscing</li>
                                                <li>Lorem ipsum dolor sit amet, consectetur adipiscing</li>
                                            </ul>
                                        </div>
                                        <section id='application-form' className={` ${(applicationForm === true) ? 'opened' : 'closed'}`}>
                                            <form onSubmit={ this.handleSubmit }>
                                                <p>Preencha os dados abaixo</p>
                                                <div className='input-wrap'>
                                                    <input className={`${(this.state.name.length > 0 ? 'active' : '')}`} name='name' id='name' onChange={this.handleInput} defaultValue={this.state.name}></input>
                                                    <label htmlFor='name'>Qual é o seu nome completo?</label>
                                                </div>
                                                <div className='input-wrap'>
                                                    <input className={`${(this.state.linkedin.length > 0 ? 'active' : '')}`} name='linkedin' id='linkedin' onChange={this.handleInput} defaultValue={this.state.linkedin}></input>
                                                    <label htmlFor='linkedin'>Linkedin</label>
                                                </div>
                                                <div className='input-wrap'>
                                                    <input
                                                        readOnly
                                                        type='file'
                                                        id='cv'
                                                        name='cv'
                                                        placeholder='Anexe seu CV'
                                                        onChange={this.onFileChange}
                                                    >
                                                    </input>
                                                    <label htmlFor='cv'>Anexe seu CV</label>
                                                    <span></span>
                                                </div>
                                                {this.fileData()}
                                                <button type='submit' className={` apply-btn btn-after ${(applicationForm === true) ? 'opened' : 'closed'}`} >Candidatar-se</button>
                                            </form>
                                        </section>
                                        <button className={` apply-btn btn-before ${(applicationForm === false) ? 'opened' : 'closed'}`} onClick={() =>  this.applyButton()}>Quero me candidatar!</button>
                                    </div>
                                </div>
                            </li>
                        </ul>
                    </div>
                </div>
                <ScrollAnimation animateIn="fadeInUp" duration='.5'>
                <div id='email-section'>
                    <div className='content'>
                        <div className='text-wrapper'>
                            <div>
                                <p className='title'>Não encontrou o cargo certo?</p>
                                <p className='text'>Envie o seu currículo por e-mail para ser considerado
                                <br/>para novas vagas no futuro.</p>
                            </div>
                            <div>
                                <button id='email-to-copy' className={` copy-email ${(copyEmail === false) ? 'opened' : 'closed'}`} onClick={() =>  this.copyEmail()}>recrutamento@oisami.com</button>
                                <button id='email-copied' className={` copy-email ${(copyEmail === true) ? 'opened' : 'closed'}`} ><span></span>copiado</button>
                            </div>
                        </div>
                    </div>
                </div>
                <div className='topback'>
                    <Link to='#root'>
                    <button>voltar ao topo</button>
                    </Link>
                </div>
                </ScrollAnimation>
            </section>
        )
    }
}
export default SectionSeven