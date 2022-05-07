import { AuthService } from 'src/services/auth.service';
import { Component, OnInit } from '@angular/core';
import { FileUpload } from 'src/interfaces/fileUpload';
import { FirestoreService } from 'src/services/firestore.service';
import { AngularFireStorage } from '@angular/fire/compat/storage';
import { finalize, Observable } from 'rxjs';

@Component({
  selector: 'app-inicio',
  templateUrl: './inicio.component.html',
  styleUrls: ['../perfil.css']
})
export class InicioComponent implements OnInit {

  userName:any = "cristobal.jjg.00";
  userImg:Observable<string> | undefined;

  constructor(private auth:AuthService,
    private storage: AngularFireStorage) { 
    this.userName = this.auth.getUsername();
    try{
      this.getUserImg(this.userName);
    }catch(err){
      console.error("No se encontró foto para este perfil");
    }
  }

  ngOnInit(): void {
    
  }


    
  async onUpload(e:any){
    const id = this.userName;
    console.log("id", id);
    const filePath = 'Profile_images/'+id;
    console.log("path", filePath);
    
    const ref = this.storage.ref(filePath);
    const task = this.storage.upload(filePath, e.target.files[0]);
    this.getUserImg(this.userName);
  }

  async getUserImg(userName: string){    
    this.storage.ref("Profile_images/" + userName)
    .getDownloadURL().subscribe((data) => this.userImg = data);
  }
  
}
