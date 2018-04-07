import React, { Component } from 'react';
import DisplayNotes from './DisplayNotes.js'
import Profile from './Profile.js'
import { Editor } from '@tinymce/tinymce-react';

class Dashboard extends Component {

  handleNotes = (e) => {
    e.preventDefault();

    const newNotes = this.state.allNotes;
    newNotes.push({subject: this.state.subject, notes: this.state.notes })
    this.setState({
          subject: '',
          notes: '',
          allNotes: newNotes
    })
  }

  handleChange = (e) => {
    const fieldName = e.target.name
    const fieldValue = e.target.value

    this.setState({
      [fieldName]: fieldValue
    })
  }

  handleEditorChange = (e) => {
    // console.log('Content was updated:', e.target.getContent());
    this.setState({
      notes: e.target.getContent()
    })

  }

  constructor() {
        super();
        // here is our constructor lifecycle method
        this.state = {
          subject: '',
          notes: '',
        }
    }

  componentDidMount() {

  }

  render() {
    return (
      <div className="container">
        <section className="row">
          <div className="col-md-8">
            <div className="block"><h2>Test Notes</h2><p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.</p></div>
            
              {this.props.user.notes ? (
                <DisplayNotes allNotes={this.props.user.notes} />
                ) : (
                <div className="block"><h3>You don't have any notes yet</h3></div>
                )}
            <div className="block">
              <form onSubmit={this.handleNotes}>
              <div>
                <h4>Subject:</h4>
                <input width="100%" onChange={this.handleChange} value={this.state.subject} type="text" name="subject" required />
              </div>
              <div>
                <h4>Notes:</h4>
                <Editor name="notes" value={this.state.notes}
                  init={{
                    plugins: 'link image code',
                    toolbar: 'undo redo | bold italic | alignleft aligncenter alignright | code'
                  }}
                  onChange={this.handleEditorChange} required
                />
              </div>
              <div className="buttonGroup">
                <button className="button" type="submit">Submit</button>
              </div>
            </form>
            </div>
          </div>
          <div className="col-md-4">
            <Profile user={this.props.user} />
          </div>
        </section>
      </div>
    );
  }
}

export default Dashboard;
