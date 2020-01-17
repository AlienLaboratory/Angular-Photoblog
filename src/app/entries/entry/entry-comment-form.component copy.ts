import {Component, EventEmitter, Output, Input, ViewChild} from '@angular/core';
import { NgForm } from '@angular/forms';
import {EntryService} from '../shared/entry.service';

@Component(
{
    selector:"app-entry-comment-form",
    templateUrl:'entry-comment-form.component.html'
})

export class EntryCommentFormComponent
{

    constructor(private entryService:EntryService)
    {

    }
    name:string="";
    comment:string="";
    @Input() entryId: number;
    @ViewChild('commentForm') commentForm: NgForm;
    @Output() onCommentAdded = new EventEmitter<{name:string,comment:string}>();
    onSubmit(commentForm:NgForm)
    {
        if(this.commentForm.invalid) return;
        let comment = {name: this.name, comment: this.comment};
        this.entryService.addComment(this.entryId,comment)
        .then(()=>{
            this.onCommentAdded.emit(comment);
            this.commentForm.resetForm();
        });
      
    }
}