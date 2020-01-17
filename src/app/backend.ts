import { InMemoryDbService } from 'angular-in-memory-web-api';

export class InMemoryEntryService implements InMemoryDbService {
  createDb() {
    let entries = [
        {
            id:1,
            title: "First Photo",
            photo: "https://images.unsplash.com/photo-1578241561880-0a1d5db3cb8a?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=750&q=80?text=Angular Basics",
            description: "My Photo Description",
            comments: [
                {id:1, name:"John",comment:"What A Lock!!"}
        ]
        },
            {
                id:2,
                title: "Second Photo",
                photo: "https://images.unsplash.com/photo-1578165219176-ece04edbd053?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=750&q=80?text=Angular Basics",
                description: "My Photo Description",
                comments: [
                    {id:2, name:"Curt",comment:"Unreal Facility"}]
                }
    ];
    return {entries};
  }
}