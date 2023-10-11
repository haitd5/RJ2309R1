// React.createElement(type, props, Children)
// + type:
//     - Tên thẻ
//     - Component (tưởng như như Thẻ (do mình tạo))
// + props (properties)
// + Children: 
//     - Text 
//     - React Element

// Virtual DOM vs Real DOM

const registerFrom = React.createElement('div',{
    className: 'register',
},
    React.createElement('h1',{ className: 'register-heading' },'Register'),
    React.createElement('p',{ className: 'register-p' },'Kindly fill in this form to register'),
    React.createElement('form',{
        className: 'register-form',
        autucapitalize: 'off',
        action: '#',
        method: 'POST',
        id: 'form-1'
    },
        React.createElement('label',{
            for: 'username',
            className: 'register-label',
        },'Username'),
        React.createElement('input',{
            type: 'text',
            id: 'username',
            className: 'register-input',
            placeholder: 'Enter username'
        }),
        React.createElement('label',{
            for: 'email',
            className: 'register-label'
        },'Email'),
        React.createElement('input',{
            type: 'email',
            id: 'email',
            className: 'register-input',
            placeholder: 'Enter email'
        }),
        React.createElement('label',{
            for: 'password',
            className: 'register-label'
        },'Password'),
        React.createElement('input',{
            type: 'password',
            id: 'password',
            className: 'register-input',
            placeholder: 'Enter password'
        }),
        React.createElement('label',{
            for: 'rep-password',
            className: 'register-label'
        },'Repeat Password'),
        React.createElement('input',{
            type: 'password',
            id: 'rep-password',
            className: 'register-input',
            placeholder: 'Repeat password'
        }),
        React.createElement('button',{
            className: 'register-submit',
            type: 'submit'
        },'Register')),
    React.createElement('p',{
        className: 'register-p'
    },
        React.createElement('span',null,'Already have an account ? '),
        React.createElement('a',{
            href: '#',
            className: 'register-link'
        },'Login')))

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(registerFrom)


