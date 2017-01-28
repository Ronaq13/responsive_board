/**
 * Created by mradul on 28/11/16.
 */
(function(){
    angular.module('socialApp')
        .controller('SidenavController', function(){
            this.settings = [
                { name: 'Account', icon: 'account_circle', url:'#/' },
                { name: 'Contacts', icon: 'contacts' , url: '#/contacts'},
                { name: 'Assignment', icon: 'assignment', url: '#/assignment' },
                { name: 'Backup', icon: 'backup', url: '#/backup' },
                { name: 'Bookmark', icon: 'bookmark', url: '#/bookmark' },
                { name: 'DNS', icon: 'dns', url: '#/dns' },
                { name: 'Description', icon: 'description', url:'#/description' },
                { name: 'Extension', icon: 'extension', url:'#/extension' },
            ];

            this.labels = [
                { name: 'GCcbh', color: '#df7474' },
                { name: 'CHchv', color: '#86df74' },
                { name: 'CHdghv', color: '#74a8df' },
                { name: 'Wbh', color: '#df74df' },
                { name: 'Pfgd', color: '#dfd574' },
                { name: 'Tbvx', color: '#3ee0c0' },
                { name: 'Cbhbd', color: '#3e63e0' },
                { name: 'Ucttf', color: '#af3ee0' },
                { name: 'Jcgcf', color: '#e03e65' },
            ];

        });
})();